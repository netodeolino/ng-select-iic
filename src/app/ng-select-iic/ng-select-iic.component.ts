import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'ng-select-iic',
  templateUrl: './ng-select-iic.component.html',
  styleUrls: ['./ng-select-iic.component.css']
})
export class NgSelectIicComponent implements OnInit {

  @Input() public listSearch: any = [];
  @Output() public selectedObject: any = new EventEmitter<any>();

  public debounceSubject: Subject<string> = new Subject<string>();
  public showResults: boolean = false;
  public listResult: any = [];

  constructor() {
    this.debounceSubject.pipe(
      debounceTime(700),
      distinctUntilChanged())
      .subscribe(res => {
        this.listResult = [];
        this.listSearch.forEach(val => {
          if (val.name && val.name.toUpperCase().includes(res.toUpperCase())) {
            this.listResult.push(val);
            this.showResults = true;
          }
        });
      });
  }

  ngOnInit() {}

  doSearch(value: string) {
    if (value != null && value != '') {
      this.debounceSubject.next(value);
    } else {
      this.showResults = false;
    }
  }

  objectClicked(object: any) {
    this.selectedObject.emit(object);
  }
}
