import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySliderComponent } from './country-slider.component';

describe('CountrySliderComponent', () => {
  let component: CountrySliderComponent;
  let fixture: ComponentFixture<CountrySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountrySliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountrySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
