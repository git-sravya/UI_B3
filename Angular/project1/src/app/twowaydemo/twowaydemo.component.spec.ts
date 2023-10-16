import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaydemoComponent } from './twowaydemo.component';

describe('TwowaydemoComponent', () => {
  let component: TwowaydemoComponent;
  let fixture: ComponentFixture<TwowaydemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwowaydemoComponent]
    });
    fixture = TestBed.createComponent(TwowaydemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
