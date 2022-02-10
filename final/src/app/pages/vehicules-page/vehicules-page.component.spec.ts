import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculesPageComponent } from './vehicules-page.component';

describe('VehiculesPageComponent', () => {
  let component: VehiculesPageComponent;
  let fixture: ComponentFixture<VehiculesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
