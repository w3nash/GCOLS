import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalogenComponent } from './halogen.component';

describe('HalogenComponent', () => {
  let component: HalogenComponent;
  let fixture: ComponentFixture<HalogenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HalogenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HalogenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
