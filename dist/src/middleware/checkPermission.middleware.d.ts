import { Response, NextFunction } from 'express';
import { LocalStorage } from 'node-localstorage';
export declare const localStorage: LocalStorage;
export declare const authLoginUser: (req: any, res: Response, next: NextFunction) => void;
