import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public listTestCats: any = [];

  constructor() {}

  ngOnInit() {
    let cat1 = { name: 'Cat 01', srcImage: 'https://www.royalcanin.es/wp-content/uploads/2017/01/gatos-de-interior.jpg' };
    let cat2 = { name: 'Cat 02', srcImage: 'https://i.ytimg.com/vi/uHqorYI--f8/hqdefault.jpg' };
    this.listTestCats.push(cat1);
    this.listTestCats.push(cat2);
  }

  objectTestSelected(object: any) {
    console.log(object);
  }
}
