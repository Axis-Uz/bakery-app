import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastrySummaryComponent } from './pastry-summary.component';

describe('PastrySummaryComponent', () => {
  let component: PastrySummaryComponent;
  let fixture: ComponentFixture<PastrySummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastrySummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastrySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
