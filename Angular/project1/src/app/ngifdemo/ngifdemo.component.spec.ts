import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifdemoComponent } from './ngifdemo.component';

describe('NgifdemoComponent', () => {
  let component: NgifdemoComponent;
  let fixture: ComponentFixture<NgifdemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgifdemoComponent]
    });
    fixture = TestBed.createComponent(NgifdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
