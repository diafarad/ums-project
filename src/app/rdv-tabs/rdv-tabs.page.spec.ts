import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RdvTabsPage } from './rdv-tabs.page';

describe('RdvTabsPage', () => {
  let component: RdvTabsPage;
  let fixture: ComponentFixture<RdvTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdvTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RdvTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
