/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ServextComponent } from './servext.component';

describe('ServextComponent', () => {
  let component: ServextComponent;
  let fixture: ComponentFixture<ServextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
