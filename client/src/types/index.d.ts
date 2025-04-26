/* eslint-disable @typescript-eslint/no-unused-vars */
import jwt from "jsonwebtoken";

declare module "jsonwebtoken" {
  export interface JwtPayload {
    role?: string;
  }
}
