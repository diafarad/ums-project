import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TakeRDVPage } from './take-rdv.page';

describe('TakeRDVPage', () => {
  let component: TakeRDVPage;
  let fixture: ComponentFixture<TakeRDVPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeRDVPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TakeRDVPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
