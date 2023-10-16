import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDFValidationdemoComponent } from './tdfvalidationdemo.component';

describe('TDFValidationdemoComponent', () => {
  let component: TDFValidationdemoComponent;
  let fixture: ComponentFixture<TDFValidationdemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TDFValidationdemoComponent]
    });
    fixture = TestBed.createComponent(TDFValidationdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
