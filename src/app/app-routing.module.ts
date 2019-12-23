import { ProductComponent } from './components/product/product.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { Page403Component } from "./components/blocks/page403/page403.component";

const routes: Routes = [
  { path: "products", component: ProductComponent },
  { path: "", redirectTo: "/products", pathMatch: "prefix" },
  { path: "**", component: Page403Component }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
