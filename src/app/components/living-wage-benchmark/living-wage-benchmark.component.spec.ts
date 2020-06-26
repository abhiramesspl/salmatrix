import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingWageBenchmarkComponent } from './living-wage-benchmark.component';

describe('LivingWageBenchmarkComponent', () => {
  let component: LivingWageBenchmarkComponent;
  let fixture: ComponentFixture<LivingWageBenchmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivingWageBenchmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivingWageBenchmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
