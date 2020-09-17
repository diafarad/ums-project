import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UrgencePage } from './urgence.page';

describe('UrgencePage', () => {
  let component: UrgencePage;
  let fixture: ComponentFixture<UrgencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrgencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UrgencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
