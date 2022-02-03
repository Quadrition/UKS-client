import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditLabelApplicationComponent } from './edit-labelApplication.component';

describe('EditLabelApplicationComponent', () => {
  let component: EditLabelApplicationComponent;
  let fixture: ComponentFixture<EditLabelApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditLabelApplicationComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLabelApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
