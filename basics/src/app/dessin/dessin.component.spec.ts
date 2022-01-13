import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DessinComponent } from './dessin.component';

describe('DessinComponent', () => {
  let component: DessinComponent;
  let fixture: ComponentFixture<DessinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DessinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DessinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
