import { base } from "./base";
export class ProductCategory implements base {
  id: number;
  name: string;
  description: string;
  createBy: string;
  status: boolean;
}
