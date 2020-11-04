import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RateDoctorPage } from './rate-doctor.page';

describe('RateDoctorPage', () => {
  let component: RateDoctorPage;
  let fixture: ComponentFixture<RateDoctorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateDoctorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RateDoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
