import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminRdvPage } from './admin-rdv.page';

describe('AdminRdvPage', () => {
  let component: AdminRdvPage;
  let fixture: ComponentFixture<AdminRdvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRdvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminRdvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
