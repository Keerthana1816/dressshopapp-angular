import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DresslistComponent } from './dresslist.component';

describe('DresslistComponent', () => {
  let component: DresslistComponent;
  let fixture: ComponentFixture<DresslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DresslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DresslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
