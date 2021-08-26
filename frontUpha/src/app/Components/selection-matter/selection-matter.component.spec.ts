import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionMatterComponent } from './selection-matter.component';

describe('SelectionMatterComponent', () => {
  let component: SelectionMatterComponent;
  let fixture: ComponentFixture<SelectionMatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionMatterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionMatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
