import { Request, Response, NextFunction } from 'express';
import { asyncWrapper } from '../utils';
import { User } from '../models';

export const register = asyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
  const user = new User(req.body);
  await user.save();

  res.status(200).json({ success: true, data: { user } });
});

export const verify = () => {};

export const login = () => {};
