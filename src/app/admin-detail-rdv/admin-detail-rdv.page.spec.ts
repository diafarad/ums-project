import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminDetailRdvPage } from './admin-detail-rdv.page';

describe('AdminDetailRdvPage', () => {
  let component: AdminDetailRdvPage;
  let fixture: ComponentFixture<AdminDetailRdvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDetailRdvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminDetailRdvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
