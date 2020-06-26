import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplieruserComponent } from './supplieruser.component';

describe('SupplieruserComponent', () => {
  let component: SupplieruserComponent;
  let fixture: ComponentFixture<SupplieruserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplieruserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplieruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
