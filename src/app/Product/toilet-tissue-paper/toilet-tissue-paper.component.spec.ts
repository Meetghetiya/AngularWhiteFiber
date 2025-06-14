import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToiletTissuePaperComponent } from './toilet-tissue-paper.component';

describe('ToiletTissuePaperComponent', () => {
  let component: ToiletTissuePaperComponent;
  let fixture: ComponentFixture<ToiletTissuePaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToiletTissuePaperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToiletTissuePaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
