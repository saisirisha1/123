import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reviewcomclass } from './newcom.component';

describe('Reviewcomclass', () => {
  let component: Reviewcomclass;
  let fixture: ComponentFixture<Reviewcomclass>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reviewcomclass ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reviewcomclass);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
