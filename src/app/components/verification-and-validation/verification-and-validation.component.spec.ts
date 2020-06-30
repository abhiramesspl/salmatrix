import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationAndValidationComponent } from './verification-and-validation.component';

describe('VerificationAndValidationComponent', () => {
  let component: VerificationAndValidationComponent;
  let fixture: ComponentFixture<VerificationAndValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationAndValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationAndValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
