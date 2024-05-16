import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OxygenComponent } from './oxygen.component';

describe('OxygenComponent', () => {
  let component: OxygenComponent;
  let fixture: ComponentFixture<OxygenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OxygenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OxygenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
