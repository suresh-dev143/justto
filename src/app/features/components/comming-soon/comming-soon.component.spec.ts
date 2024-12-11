import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommingSoonComponent } from './comming-soon.component';

describe('CommingSoonComponent', () => {
  let component: CommingSoonComponent;
  let fixture: ComponentFixture<CommingSoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommingSoonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommingSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
