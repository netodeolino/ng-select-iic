import { Component, OnInit, Input } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @Input() public listSearch: any = [];
  public listResult: any = [];
  
  public debounceSubject: Subject<string> = new Subject<string>();

  public showResults: boolean = false;

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

  ngOnInit() {
    let cat1 = { name: 'Cat 01', srcImage: 'https://www.royalcanin.es/wp-content/uploads/2017/01/gatos-de-interior.jpg' };
    let cat2 = { name: 'Cat 02', srcImage: 'https://i.ytimg.com/vi/uHqorYI--f8/hqdefault.jpg' };
    this.listSearch.push(cat1);
    this.listSearch.push(cat2);
  }

  doSearch(value: string) {
    if (value != null && value != '') {
      this.debounceSubject.next(value);
    } else {
      this.showResults = false;
    }
  }

  objectClicked(object: any) {
    console.log(object);
  }
}
