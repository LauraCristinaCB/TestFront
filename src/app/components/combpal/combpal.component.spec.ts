/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CombpalComponent } from './combpal.component';

describe('CombpalComponent', () => {
  let component: CombpalComponent;
  let fixture: ComponentFixture<CombpalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombpalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombpalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
