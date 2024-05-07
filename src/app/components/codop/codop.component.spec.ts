/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CodopComponent } from './codop.component';

describe('CodopComponent', () => {
  let component: CodopComponent;
  let fixture: ComponentFixture<CodopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
