import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCloseComponent } from './add-close.component';

describe('AddCloseComponent', () => {
  let component: AddCloseComponent;
  let fixture: ComponentFixture<AddCloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCloseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
