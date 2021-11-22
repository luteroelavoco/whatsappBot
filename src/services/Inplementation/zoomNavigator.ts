import { INavigator } from '../INavigator';

export class ZoomNavigator implements INavigator {
  constructor() {}
  async navigator(page) {
    const response = await page.evaluate(() => {
      const compareOrRedirect = (
        document.getElementsByClassName(
          'CallToAction_Label__2YqN0'
        )[0] as HTMLElement
      ).innerText;

      if (compareOrRedirect.includes('Comparar')) {
        const nodeSelectHrefs = document.querySelector(
          'li.Hits_SearchResultListItem__1w6j-:not(.Hits_Sponsored__3Iw-J) span a'
        );
        return {
          link: nodeSelectHrefs.getAttribute('href'),
        };
      }

      const nodeNames = document.querySelectorAll(
        'h2.Text_Text___RzD-.Text_LabelSmRegular__2Lr6I'
      );

      const nodePrices = document.querySelectorAll(
        'strong.Text_Text___RzD-.Text_LabelMdBold__3KBIj.CellPrice_MainValue__3s0iP'
      );

      const nodehrefs = document.querySelectorAll(
        'span.Cell_CellBody__3XC7o a'
      );

      const names = Array.from(nodeNames).map((e: any) => e.innerText);
      const prices = Array.from(nodePrices).map((e: any) =>
        e.innerText.replace(/\n/g, '')
      );
      const hrefs = Array.from(nodehrefs).map((e: any) => e.href);

      return names.map((name, index) => ({
        label: name,
        price: prices[index],
        href: hrefs[index],
      }));
    });

    if (response && response.link) {
      await Promise.all([
        page.goto(`https://www.zoom.com.br${response.link}`, {
          waitUntil: 'networkidle2',
        }),
      ]);

      const array = await page.evaluate(() => {
        const name = (
          document.querySelector(
            'h1.OverviewArea_TitleText__1s_GP'
          ) as HTMLElement
        ).innerText;

        const nodeSelectHrefs = document.querySelectorAll(
          '[class^=SimilarCard_Information]  [class^=MerchantBrand_Merchant] a '
        );
        const nodePrices = document.querySelectorAll(
          '.PriceBox_PriceBox__3V0KN a'
        );

        const prices = Array.from(nodePrices)
          .slice(1, nodePrices.length)
          .map((e) => (e as HTMLElement).innerText.replace(/\n/g, ''));
        const hrefs = Array.from(nodeSelectHrefs).map(
          (e) => (e as HTMLAnchorElement).href
        );

        return prices.map((price, index) => ({
          label: name,
          price: price,
          href: hrefs[index],
        }));
      });

      return array;
    }
    return response;
  }
}
