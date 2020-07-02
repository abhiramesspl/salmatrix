import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSubgroupComponent } from './product-subgroup.component';

describe('ProductSubgroupComponent', () => {
  let component: ProductSubgroupComponent;
  let fixture: ComponentFixture<ProductSubgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSubgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSubgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
