import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientuserComponent } from './clientuser.component';

describe('ClientuserComponent', () => {
  let component: ClientuserComponent;
  let fixture: ComponentFixture<ClientuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
