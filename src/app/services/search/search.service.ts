import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject} from 'rxjs';
import { tap, mergeMap,map, catchError} from 'rxjs/operators';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

    public searchResultSubject = new Subject<any>();

  constructor(private http: HttpClient, @Inject(SESSION_STORAGE) private storage: StorageService) { 
  }

  public getSearch(issueTitle) {
      let url = 'https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&site=stackoverflow&q='+issueTitle
    console.log('url-->', url);
      return this.http.get<any>(url).pipe(
      tap((data) => {
        this.storage.set('search-results', data.items);
        this.searchResultSubject.next(data);
      }),
      catchError( (err) => Observable.throw(err.json().error) )
    )
  }

   public getSearchResults(): Observable<any>{
    return this.searchResultSubject.asObservable();
   }
   
}
