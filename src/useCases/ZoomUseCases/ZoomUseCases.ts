import { IZoomProvider } from '@providers/IZoomProvider';

export class ZoomUseCases {
  constructor(private zoomProvider: IZoomProvider) {}

  async execute(product: string) {
    return await this.zoomProvider.getZoomProducts(product);
  }
}
