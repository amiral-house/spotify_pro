import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowDragComponent } from './window-drag.component';

describe('WindowDragComponent', () => {
  let component: WindowDragComponent;
  let fixture: ComponentFixture<WindowDragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowDragComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
