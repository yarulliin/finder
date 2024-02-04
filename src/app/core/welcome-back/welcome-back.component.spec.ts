import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeBackComponent } from './welcome-back.component';

describe('WelcomeBackComponent', () => {
  let component: WelcomeBackComponent;
  let fixture: ComponentFixture<WelcomeBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeBackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WelcomeBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
