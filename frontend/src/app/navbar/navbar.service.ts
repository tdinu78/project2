import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
//.pipe(map(...))

@Injectable()
export class NavbarService {

    constructor(private http: Http) {}

    getNavItems() {
        
       return this.http.get('http://5b17c999f5c9b700145512dc.mockapi.io/api/getNavItems')
        .pipe(map(
            (response: Response) => {
                const data = response.json();
                if (data.rc !== 0) {
                    throw(data.message);
                } else {
                    return data.results;
                }
                
            }
        ),
        catchError((error: Response) => {
            throw('something went wrong');
          }
        ))
       
        
    }

}