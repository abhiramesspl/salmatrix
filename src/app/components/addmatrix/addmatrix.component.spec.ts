import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmatrixComponent } from './addmatrix.component';

describe('AddmatrixComponent', () => {
  let component: AddmatrixComponent;
  let fixture: ComponentFixture<AddmatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
