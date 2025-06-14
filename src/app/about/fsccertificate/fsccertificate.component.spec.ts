import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FSCCertificateComponent } from './fsccertificate.component';

describe('FSCCertificateComponent', () => {
  let component: FSCCertificateComponent;
  let fixture: ComponentFixture<FSCCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FSCCertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FSCCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
