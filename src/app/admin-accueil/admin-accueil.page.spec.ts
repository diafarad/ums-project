import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminAccueilPage } from './admin-accueil.page';

describe('AdminAccueilPage', () => {
  let component: AdminAccueilPage;
  let fixture: ComponentFixture<AdminAccueilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAccueilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminAccueilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
