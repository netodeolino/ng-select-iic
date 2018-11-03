import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSelectIicComponent } from './ng-select-iic.component';

describe('NgSelectIicComponent', () => {
  let component: NgSelectIicComponent;
  let fixture: ComponentFixture<NgSelectIicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSelectIicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSelectIicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
