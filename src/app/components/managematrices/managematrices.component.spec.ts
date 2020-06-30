import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagematricesComponent } from './managematrices.component';

describe('ManagematricesComponent', () => {
  let component: ManagematricesComponent;
  let fixture: ComponentFixture<ManagematricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagematricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagematricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
