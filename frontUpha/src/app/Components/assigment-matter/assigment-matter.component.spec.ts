import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigmentMatterComponent } from './assigment-matter.component';

describe('AssigmentMatterComponent', () => {
  let component: AssigmentMatterComponent;
  let fixture: ComponentFixture<AssigmentMatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssigmentMatterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigmentMatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
