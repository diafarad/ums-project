import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminRdvTabPage } from './admin-rdv-tab.page';

describe('AdminRdvTabPage', () => {
  let component: AdminRdvTabPage;
  let fixture: ComponentFixture<AdminRdvTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRdvTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminRdvTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
