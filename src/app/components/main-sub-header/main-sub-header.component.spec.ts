import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSubHeaderComponent } from './main-sub-header.component';

describe('MainSubHeaderComponent', () => {
  let component: MainSubHeaderComponent;
  let fixture: ComponentFixture<MainSubHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSubHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSubHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
