import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-progress-loader',
  templateUrl: './progress-loader.component.html',
  styleUrls: ['./progress-loader.component.css']
})
export class ProgressLoaderComponent implements OnInit {

  @Input() loadingSize;
  @Input() loadingMessage;

  constructor() {}

  ngOnInit() {
  }

}
