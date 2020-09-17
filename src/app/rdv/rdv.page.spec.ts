import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RdvPage } from './rdv.page';

describe('RdvPage', () => {
  let component: RdvPage;
  let fixture: ComponentFixture<RdvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RdvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
