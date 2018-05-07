import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnPtComponent } from './en-pt.component';

describe('EnPtComponent', () => {
  let component: EnPtComponent;
  let fixture: ComponentFixture<EnPtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnPtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnPtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
