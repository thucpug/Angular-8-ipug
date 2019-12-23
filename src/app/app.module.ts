import { ProductComponent } from "./components/product/product.component";
import { ProductService } from "./services/ProductService";
import { MenuComponent } from "./components/blocks/menu/menu.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { Page403Component } from "./components/blocks/page403/page403.component";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./components/blocks/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    Page403Component,
    ProductComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
