import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingPersonComponent } from './missing-person.component';

describe('MissingPersonComponent', () => {
  let component: MissingPersonComponent;
  let fixture: ComponentFixture<MissingPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
