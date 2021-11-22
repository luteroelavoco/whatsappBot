import express from 'express';
import router from './routers';
import { trainNLP } from '@services/Inplementation/naturalLanguage';
import { whatsappBotProvider } from '@useCases/whatsappBotUseCases';

const app = express();

trainNLP();
whatsappBotProvider.start();

app.use(router);

app.listen(3333);
