import { Puppeteer } from '@services/Inplementation/puppeteer';
import { ZoomNavigator } from '@services/Inplementation/zoomNavigator';
import { ZoomProvider } from '@providers/implemententations/ZoomProvider';
import { ZoomUseCases } from './ZoomUseCases';
import { ZoomUseController } from './ZoomUseController';

const zoomNavigator = new ZoomNavigator();
const puppeteer = new Puppeteer(false, zoomNavigator.navigator);
const zoomProvider = new ZoomProvider(puppeteer);
const zoomUseCases = new ZoomUseCases(zoomProvider);
const zoomController = new ZoomUseController(zoomUseCases);

export { zoomController, zoomUseCases };
