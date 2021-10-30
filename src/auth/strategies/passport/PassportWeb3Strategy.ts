import { ethers } from 'ethers';
import { Request } from 'express';
import { Strategy } from 'passport-strategy';
import { VerifyCallback } from './types';

type Options = {
  signatureField?: string;
  passReqToCallback?: boolean;
};

const defaultOptions: Options = {
  signatureField: 'signature',
};

export class PassportWeb3Strategy extends Strategy {
  readonly name: string = 'web3';
  readonly options: Options;
  protected readonly verify: VerifyCallback;

  constructor(options: Options, verify: VerifyCallback) {
    super();

    this.options = {
      ...defaultOptions,
      ...options,
    };

    if (typeof verify !== 'function') {
      throw new TypeError('PassportWeb3Strategy requires a verify callback');
    }

    this.verify = verify;
  }

  authenticate(req: Request) {
    const query = req.method === 'GET' ? req.query : req.body;

    try {
      const result = this.validateQuery(query);

      if (!result) {
        return result;
      }

      const verifiedCallback = (error: any, user: any, info: string) => {
        if (error) {
          return this.error(error);
        }
        if (!user) {
          return this.fail(info, 400);
        }

        this.success(user, info);
      };

      const args = [result.address, result.message, verifiedCallback];

      if (this.options.passReqToCallback) {
        args.unshift(req);
      }

      this.verify.call(this, ...args);
    } catch (error) {
      this.error(error);
    }
  }

  private validateQuery(query: Record<string, string>) {
    const signature = query[this.options.signatureField];

    if (!signature) {
      return this.fail({ message: 'No signature provided' }, 400);
    }

    try {
      const { address, signed, message } = JSON.parse(
        Buffer.from(signature, 'base64').toString(),
      );

      if (!address || !signed || !message) {
        return this.fail(
          { message: `No address, signature or message provided` },
          400,
        );
      }

      const recoveredAddress = ethers.utils.verifyMessage(message, signed);

      if (recoveredAddress !== address) {
        return this.fail(
          { message: "Recovered address doesn't match provided address" },
          403,
        );
      }

      return { address, message };
    } catch (error) {
      return this.fail({ message: `Failed to validate query: ${error}` }, 400);
    }
  }
}
