import { ProductService } from "./../../services/ProductService";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  products = [];
  msgErr = "";
  page = 1;
  limit = 100;
  constructor(private _productService: ProductService) {}

  ngOnInit() {
    this._productService.getProducts(this.page, this.limit).subscribe(
      data => (this.products = data.data.listResult),
      err => (this.msgErr = err)
    );
  }
}
