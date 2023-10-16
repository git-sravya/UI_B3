import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfdemoComponent } from './tdfdemo.component';

describe('TdfdemoComponent', () => {
  let component: TdfdemoComponent;
  let fixture: ComponentFixture<TdfdemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TdfdemoComponent]
    });
    fixture = TestBed.createComponent(TdfdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
