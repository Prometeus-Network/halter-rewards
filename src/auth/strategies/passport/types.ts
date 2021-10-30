import { Request } from 'express';

export type DoneCallback = (err: any, user: any, info: any) => void;

export type CallbackWithRequest = (
  req: Request,
  address: string,
  message: string,
  done?: DoneCallback,
) => void;

export type CallbackWithoutRequest = (
  address: string,
  message: string,
  done: DoneCallback,
) => void;

export type Callback = (arg1: any, arg2: any, arg3: any, arg4?: any) => void;

export type VerifyCallback =
  | CallbackWithRequest
  | CallbackWithoutRequest
  | Callback;
