import { Component, OnInit, Directive } from '@angular/core';
import * as data from '../../../assets/json/colleges.json';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  records: any = [];
  sum: number = 10;
  bool: boolean = true;
  bool2: boolean = false;

  constructor() { 
    this.appendItems(0, this.sum);
  }

  ngOnInit() {
    
  }

  addItems(startIndex, endIndex, _method) {
    for (let i = startIndex; i < endIndex; ++i) {
      this.records[_method](data.colleges[i]);
    }
  }

  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'push');
  }

  onScroll() {
    if(this.sum==40) {
      this.bool = false;
      this.bool2 = true;
    }
    console.log(this.bool);
    console.log(this.sum);
    console.log('scrolled!');
    const start = this.sum;
    this.sum += 10;
    this.appendItems(start, this.sum);
  }

}
