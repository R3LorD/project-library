import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrutcheComponent } from './crutche.component';

describe('CrutcheComponent', () => {
  let component: CrutcheComponent;
  let fixture: ComponentFixture<CrutcheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrutcheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrutcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
