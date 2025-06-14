import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenTissueComponent } from './kitchen-tissue.component';

describe('KitchenTissueComponent', () => {
  let component: KitchenTissueComponent;
  let fixture: ComponentFixture<KitchenTissueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenTissueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenTissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
