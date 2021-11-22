import express from 'express';
import { zoomController } from '@useCases/ZoomUseCases';

const router = express.Router();

router.get('/', (req, res) => {
  return res.json({ hello: 'world' });
});

router.get('/zoom/:search', async (req, res) => {
  return zoomController.handle(req, res);
});

export default router;
