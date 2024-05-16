import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NitrogenComponent } from './nitrogen.component';

describe('NitrogenComponent', () => {
  let component: NitrogenComponent;
  let fixture: ComponentFixture<NitrogenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NitrogenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NitrogenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
