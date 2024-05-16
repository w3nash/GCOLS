import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoriesComponent } from './theories.component';

describe('TheoriesComponent', () => {
  let component: TheoriesComponent;
  let fixture: ComponentFixture<TheoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
