import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NapkinTissueComponent } from './napkin-tissue.component';

describe('NapkinTissueComponent', () => {
  let component: NapkinTissueComponent;
  let fixture: ComponentFixture<NapkinTissueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NapkinTissueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NapkinTissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
