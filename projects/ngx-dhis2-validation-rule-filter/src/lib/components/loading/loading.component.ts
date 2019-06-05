import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  @Input()
  borderRadius: string;

  @Input()
  height: string;
  constructor() {
    this.height = '100%';
  }

  ngOnInit() {
  }

}
