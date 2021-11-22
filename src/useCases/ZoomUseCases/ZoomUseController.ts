import { Response, Request } from 'express';
import { ZoomUseCases } from './ZoomUseCases';

export class ZoomUseController {
  constructor(private zoomUseCases: ZoomUseCases) {}

  async handle(req: Request, res: Response) {
    try {
      const { search } = req.params;
      return res.json(await this.zoomUseCases.execute(search));
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || 'Unexpected error. ' });
    }
  }
}
