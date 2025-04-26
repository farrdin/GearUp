export * from "./global";
export * from "./sideBarItems.type";
export * from "./bicycle.type";

import { JwtPayload } from "jwt-decode";

export interface CustomJwtPayload extends JwtPayload {
  role: string;
}
