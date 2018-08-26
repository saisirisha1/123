import { Component,Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcom',
  templateUrl: './newcom.component.html',
  styleUrls: ['./newcom.component.css']
})
export class Reviewcomclass implements OnInit  {
  @Input() Allreviews:any;
  @Output() messageEvent = new EventEmitter();
  MyFriendsList = "ramu";

}


