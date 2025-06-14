import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyWhiteFiberComponent } from './why-white-fiber.component';

describe('WhyWhiteFiberComponent', () => {
  let component: WhyWhiteFiberComponent;
  let fixture: ComponentFixture<WhyWhiteFiberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyWhiteFiberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyWhiteFiberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
