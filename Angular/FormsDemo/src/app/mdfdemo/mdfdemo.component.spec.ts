import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdfdemoComponent } from './mdfdemo.component';

describe('MdfdemoComponent', () => {
  let component: MdfdemoComponent;
  let fixture: ComponentFixture<MdfdemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdfdemoComponent]
    });
    fixture = TestBed.createComponent(MdfdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
