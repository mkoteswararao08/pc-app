
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course/course.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tutorial-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

    topicId:String = "1";
    projectURL:String;
    private courseId: number;
    videoId:String;
    sampleCode:String;

    constructor( private route: ActivatedRoute,
    private router: Router, private courseServ: CourseService) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.courseId = +params["courseId"];
      let topic = this.courseServ.getCourseDetails(this.courseId).topics[0];
      this.sampleCode = topic.code;
      console.log('VideoComponent->ngOnInit courseId', this.courseId, ' topic-->', topic);
      this.projectURL = topic.projectUrl;
      this.videoId = "https://www.youtube.com/embed/"+ topic.videoId;
    });
    this.route.params.subscribe( params => {
      let topic = this.courseServ.getTopicDetails(this.courseId, params.topicId);
      this.sampleCode = topic.code;
      console.log('courseId-->', this.courseId, 'topic id-->', params.topicId, 'topic->', topic)
      this.projectURL = topic.projectUrl;
      this.videoId = "https://www.youtube.com/embed/"+ topic.videoId;
    });
   
  }

}
