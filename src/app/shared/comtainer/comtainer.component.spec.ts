import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComtainerComponent } from './comtainer.component';

describe('ComtainerComponent', () => {
  let component: ComtainerComponent;
  let fixture: ComponentFixture<ComtainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComtainerComponent]
    });
    fixture = TestBed.createComponent(ComtainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
