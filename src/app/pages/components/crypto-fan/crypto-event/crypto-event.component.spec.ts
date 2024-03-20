import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoEventComponent } from './crypto-event.component';

describe('CryptoEventComponent', () => {
  let component: CryptoEventComponent;
  let fixture: ComponentFixture<CryptoEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
