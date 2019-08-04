import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course/course.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseDetails } from '../../services/course/coursedetails';

@Component({
  selector: 'tutorial-contant',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {
  courseDetails:CourseDetails;
  constructor( private route: ActivatedRoute,
    private router: Router, private courseSer: CourseService) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      let courseId = params.courseId;
      this.courseDetails = this.courseSer.getCourseDetails(courseId);
      console.log('TutorialComponent->ngOnInit() courseId->', this.courseDetails,
        'couse detilas->', this.courseDetails);
    });
  }

}
