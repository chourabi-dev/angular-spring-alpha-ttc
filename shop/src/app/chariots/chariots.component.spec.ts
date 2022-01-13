import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChariotsComponent } from './chariots.component';

describe('ChariotsComponent', () => {
  let component: ChariotsComponent;
  let fixture: ComponentFixture<ChariotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChariotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChariotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
