import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course=[
    {'id':1,'name':'Learn Angular','description':'Angular is a platform and framework for building single-page client applications using HTML and TypeScript using HTML and TypeScript. TypeScript.','image':'../../assets/angular.png'},
    {'id':2,'name':'Learn NodeJs','description':'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. that runs on the V8 engine and executes JavaScript code outside a web browser. that runs on the V8 engine code outside a web browser.outside a web browser. a web browser.ancsd asdasd aaayes   absbsb...  ','image':'../../assets/nodejs.png'},
    {'id':3,'name':'Learn ReactJs','description':'React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.React can be used as a base in the development of single-page or mobile applications.abcsd ','image':'../../assets/reactjs.png'},
    {'id':4,'name':'Learn TypeScript','description':'ypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript.  TypeScript is designed for the development of large applications and transcompiles to JavaScript.  TypeScript is designed for the development of large applications and transcompiles to JavaScript.  TypeScript is ...','image':'../../assets/typescript.png'}
  ]

}
