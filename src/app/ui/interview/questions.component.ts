import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'interview-questions',
  templateUrl: './questions.component.html'
})
export class QuestionsComponent implements OnInit {
    questionsFileName:String="README.md";
  constructor( private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.questionsFileName = 'assets/'+ params.courseName + '-interview-questions.md';
      console.log('questionsFileName-->', this.questionsFileName);
    });
  }

  errorHandler(error){
    console.log('error while loading readme file', error);
  }
}
