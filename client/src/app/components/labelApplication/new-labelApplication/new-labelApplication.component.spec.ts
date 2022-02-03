import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewLabelApplicationComponent } from './new-labelApplication.component';

describe('NewLabelApplicationComponent', () => {
  let component: NewLabelApplicationComponent;
  let fixture: ComponentFixture<NewLabelApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewLabelApplicationComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLabelApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
