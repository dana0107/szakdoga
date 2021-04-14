import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCloseFamilyComponent } from './add-close-family.component';

describe('AddCloseFamilyComponent', () => {
  let component: AddCloseFamilyComponent;
  let fixture: ComponentFixture<AddCloseFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCloseFamilyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCloseFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
