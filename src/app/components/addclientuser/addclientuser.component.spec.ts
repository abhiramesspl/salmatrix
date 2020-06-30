import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddclientuserComponent } from './addclientuser.component';

describe('AddclientuserComponent', () => {
  let component: AddclientuserComponent;
  let fixture: ComponentFixture<AddclientuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddclientuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddclientuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
