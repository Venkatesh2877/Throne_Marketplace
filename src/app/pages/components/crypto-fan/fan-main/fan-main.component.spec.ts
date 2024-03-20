import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanMainComponent } from './fan-main.component';

describe('FanMainComponent', () => {
  let component: FanMainComponent;
  let fixture: ComponentFixture<FanMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
