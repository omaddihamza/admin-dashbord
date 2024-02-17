import { JwtPayload } from "jwt-decode";

export interface CustomJwtPayload extends JwtPayload {
    roles: Array<{ authority: string }>;
  }