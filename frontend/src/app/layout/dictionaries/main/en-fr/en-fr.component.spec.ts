import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnFrComponent } from './en-fr.component';

describe('EnFrComponent', () => {
  let component: EnFrComponent;
  let fixture: ComponentFixture<EnFrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnFrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnFrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
