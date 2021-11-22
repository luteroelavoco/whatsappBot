export interface IPuppeteer {
  extractData(url: string): Promise<any>;
}
