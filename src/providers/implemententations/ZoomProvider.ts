import { ZoomProducts } from '@entities/zoomProducts';
import { IPuppeteer } from '@services/IPuppeteer';
import { IZoomProvider } from '@providers/IZoomProvider';

export class ZoomProvider implements IZoomProvider {
  constructor(private puppeteer: IPuppeteer) {}

  async getZoomProducts(product: string): Promise<Array<ZoomProducts>> {
    const url = `https://www.zoom.com.br/search?q=${product}`;
    return await this.puppeteer.extractData(url);
  }
}
