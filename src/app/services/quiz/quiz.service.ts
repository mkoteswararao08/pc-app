import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject} from 'rxjs';
import { tap, mergeMap,map, catchError} from 'rxjs/operators'
import { Questions } from './questions';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { 
  }

  public getQuizData(courseId,topicId) {
    return this.http.get<Questions>('https://codingkrishna.github.io/api/questions.json').pipe(
      tap((data) => {
        console.log(data)
      }),
      catchError( (err) => Observable.throw(err.json().error) )
    )
  }

}
