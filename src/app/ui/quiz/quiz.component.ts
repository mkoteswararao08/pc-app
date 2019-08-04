
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuizService } from '../../services/quiz/quiz.service';
import {AnswerKey } from './answerkey';
import { CountdownComponent } from 'ngx-countdown';
@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  @ViewChild('countdown') counter: CountdownComponent;

    private topicId: number = 1;
    private courseId: number;
    private quizQuestions;
    question: String;
    option: any[];
    i: number = 0;
    quizlength: number = 1;
    showMarks:boolean =false;
    marskScored:string="";

    constructor( private route: ActivatedRoute, private router: Router, 
        private quizServ: QuizService) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.courseId = +params["courseId"];
      console.log('QuizComponent->ngOnInit parent courseId', this.courseId, ' topicId-->', this.topicId);
      this.getQuestions();
    });
    this.route.params.subscribe( params => {
      console.log('QuizComponent->ngOnInit child params', params);
      console.log('QuizComponent->ngOnInit courseId-->', this.courseId, 'topic id-->', params.topicId, 'topicId->', params.topicId)
      this.topicId = params.topicId;
      this.getQuestions();
    });
  }

  getQuestions(){
    this.quizServ.getQuizData(this.courseId, this.topicId).subscribe(data => {
      this.quizQuestions = data.questions.filter(quesesion => quesesion.languageId == this.courseId &&  quesesion.topicId == this.topicId)
      console.log('QuizComponent->ngOnInit quizQuestions', this.quizQuestions);
      this.question = this.quizQuestions[0].question;
      this.option = this.quizQuestions[0].anslist;
      this.i = 0;
      this.quizlength = this.quizQuestions.length;
    });
  }

    /******************************************************** */
    next() {   
      ++this.i;
      this.question = this.quizQuestions[this.i].question;
      this.option = this.quizQuestions[this.i].anslist;
    }
    previous() {
      --this.i;
      this.question = this.quizQuestions[this.i].question;
      this.option = this.quizQuestions[this.i].anslist;
    }
  /********************************************************* */

  answerkey: AnswerKey[] = [];


  check(e, str: String, answer: String) {
    if (e.target.checked) {
      console.log("..................."+str + " " + answer);
      this.answerkey.push(new AnswerKey(str, answer));
    }
    else {
      this.answerkey.splice(0, 1);
    }
    console.log(this.answerkey);
    this.recursivecheck();
  }
  ///////////////////////////////////

  marks: number = 0;
  generatemark() {
    for (var i = 0; i < this.answerkey.length; i++) {
      if (this.answerkey[i].choosen == this.quizQuestions[i].answer) this.marks++;
    }
    this.marskScored=JSON.stringify(this.marks);
    this.showMarks=true;
    // alert("your score is "+JSON.stringify(this.marks));
    // document.writeln("your score is " + this.marks);
  }

  ///////////////////////////////////

  recursivecheck() {
    var result1 = this.quizQuestions;
    var result2 = this.answerkey;

    var props = ['id', 'answer'];

    var result = result1.filter(function (o1) {
      // filter out (!) items in result2
      return result2.some(function (o2) {
        return o1.answer === o2.answer;
        // assumes unique id
      });

    }).map(function (o) {

      // use reduce to make objects with only the required properties
      // and map to apply this to the filtered array as a whole
      return props.reduce(function (newo, ans) {
        newo[ans] = o[ans];
        return newo;
      }, {});
    });
    console.log("result:" + JSON.stringify(result));
  }
  
  finishTest() {
    this.generatemark();
  }


 startQuiz(){
   //this.counter.resume();
   this.counter.begin();
 }
 

}
