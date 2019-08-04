import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { CourseService} from './services/course/course.service';
import { Courses } from './services/course/courses';
import { HttpClient } from '@angular/common/http';
import { Observable, of, EMPTY } from 'rxjs';
import { tap, mergeMap,map, catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class TutorialResolve implements Resolve<any> {
 constructor(private courseSer: CourseService, private http: HttpClient){

 }
 resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot,) {
     return this.http.get<Courses>("https://codingkrishna.github.io/api/courses.json").pipe(
      tap((data) => {
        this.courseSer.coursesData = data;
        this.courseSer.courseSubject.next(data);
      }),
      catchError( (err) => Observable.throw(err.json().error) )
    )
  }

}
