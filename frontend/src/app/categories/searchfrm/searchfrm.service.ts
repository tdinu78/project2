import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http'
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {Supplier} from "../supplier.model";


@Injectable()
export class SearchfrmService {

    private api = 'http://localhost:8080/api/getSearchResults';

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

    getSearchResults(sdata:Supplier) {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
       return this.http.post<Supplier[]>(this.api, sdata, httpOptions)
           .subscribe(data=>{
               console.log(data);
           },
        error =>this.handleError(error));
       }

}