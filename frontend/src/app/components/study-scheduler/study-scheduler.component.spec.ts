import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudySchedulerComponent } from './study-scheduler.component';

describe('StudySchedulerComponent', () => {
  let component: StudySchedulerComponent;
  let fixture: ComponentFixture<StudySchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudySchedulerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudySchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
