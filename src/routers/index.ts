import express from 'express';
import Zoom from '@services/zoom';

const router = express.Router();

router.get('/', (req, res) => {
  return res.json({ hello: 'world' });
});

router.get('/zoom/:search', async (req, res) => {
  const { search } = req.params;
  const result = await Zoom(search);
  return res.json({ result });
});

export default router;
