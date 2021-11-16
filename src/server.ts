import express from 'express';
import router from './routers';
import '@services/whatsappBot';

const app = express();

app.use(router);

app.listen(3333);
