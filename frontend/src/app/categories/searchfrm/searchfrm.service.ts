import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http'
import { throwError } from 'rxjs';
import {SupplierModel} from "../supplier.model";
import {SupplierRespModel} from "../supplierResp.model";
import {map} from "rxjs/internal/operators";
import {catchError} from "rxjs/operators";


@Injectable()
export class SearchfrmService {

    private api = 'http://localhost:8080/api/suppliers/search';

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      };


    constructor(private http: HttpClient) {}

    getSearchResults(sdata:SupplierModel) {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
       return this.http.post<SupplierRespModel>(this.api, sdata, httpOptions)
           .pipe(map(data =>{
               if (data.rc !== 0) {
                   throw(data.message);
               } else {
                   return <SupplierRespModel> data;
               }
           }),
           catchError(this.handleError)
           );
       }

}