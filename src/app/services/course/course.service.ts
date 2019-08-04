import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Courses } from './courses';
import {CourseDetails} from './coursedetails';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class CourseService {
  public coursesData:Courses;
  public courseSubject = new Subject<Courses>();

  constructor(private http: HttpClient) { 
  }

  public getCourses() {
    return this.courseSubject.asObservable();
  }

  public getCourseDetails(courseId): CourseDetails{
    return this.coursesData.courses.filter(course => course.courseId == courseId)[0];
  }

  public getTopicDetails(courseId, topicId){
    let course =  this.coursesData.courses.filter(course => course.courseId == courseId)[0];
    return course.topics.filter(topic => topic.topicId == topicId)[0];
  }

}
