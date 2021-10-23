import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreChartsComponent } from './more-charts.component';

describe('MoreChartsComponent', () => {
  let component: MoreChartsComponent;
  let fixture: ComponentFixture<MoreChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
