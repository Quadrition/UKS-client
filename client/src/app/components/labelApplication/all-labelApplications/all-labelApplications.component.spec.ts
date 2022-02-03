import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllLabelApplicationsComponent } from './all-labelApplications.component';

describe('AllLabelApplicationsComponent', () => {
  let component: AllLabelApplicationsComponent;
  let fixture: ComponentFixture<AllLabelApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllLabelApplicationsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLabelApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
