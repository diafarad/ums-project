import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UrgTabsPage } from './urg-tabs.page';

describe('UrgTabsPage', () => {
  let component: UrgTabsPage;
  let fixture: ComponentFixture<UrgTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrgTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UrgTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
