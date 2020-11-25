import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewDocteurPage } from './new-docteur.page';

describe('NewDocteurPage', () => {
  let component: NewDocteurPage;
  let fixture: ComponentFixture<NewDocteurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDocteurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewDocteurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
