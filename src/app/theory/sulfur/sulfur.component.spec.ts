import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SulfurComponent } from './sulfur.component';

describe('SulfurComponent', () => {
  let component: SulfurComponent;
  let fixture: ComponentFixture<SulfurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SulfurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SulfurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
