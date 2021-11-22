import { ZoomProducts } from '@entities/zoomProducts';

export interface IZoomProvider {
  getZoomProducts(product: string): Promise<Array<ZoomProducts>>;
}
