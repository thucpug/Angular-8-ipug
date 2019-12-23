import { ProductCategory } from "./ProductCategory";
import { base } from "./base";
export class product implements base {
  id: number;
  name: string;
  description: string;
  createBy: string;
  status: boolean;
  image: string;
  price: number;
  promotionPrice: number;
  warranty: number;
  hotFlag: boolean;
  productcategory: ProductCategory;
}
