import { ErrorRequestHandler } from 'express';
import { CustomError } from '../utils';

export const errorMiddleware: ErrorRequestHandler = (error: any, req, res, next) => {
  let err = { ...error };

  if (error.name === 'ValidationError') {
    const { errors } = error;
    const field = Object.keys(errors)[0];
    const message = errors[field].message;

    err = new CustomError(message, 400);
  }

  if (error.code === 11000) {
    const [key, value] = Object.entries(error.keyValue)[0];
    err = new CustomError(`${key} with value: ${value} already exist`, 400);
  }

  if (err instanceof CustomError) {
    err.code = err.code || error.code;
    err.message = err.message || error.message;
  }

  res.status(err.code || error.code || 500).json({
    success: false,
    message: err.message || error.message || 'Inrernal Server error',
  });
};
