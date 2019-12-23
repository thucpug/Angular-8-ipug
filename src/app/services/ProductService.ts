import { catchError } from "rxjs/operators";
import { Observable } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { product } from "src/app/models/product";
import { throwError } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(page: number, limit: number): Observable<product[]> {
    return this.http
      .get<product[]>(
        `http://103.90.225.90:8080/api/v1/products?page=${page}&limit=${limit}`
      )
      .pipe(
        catchError(err => {
          return this.errorHandler(err);
        })
      );
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}
