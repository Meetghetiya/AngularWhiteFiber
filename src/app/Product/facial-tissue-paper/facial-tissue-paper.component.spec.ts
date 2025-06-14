import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacialTissuePaperComponent } from './facial-tissue-paper.component';

describe('FacialTissuePaperComponent', () => {
  let component: FacialTissuePaperComponent;
  let fixture: ComponentFixture<FacialTissuePaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacialTissuePaperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacialTissuePaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
