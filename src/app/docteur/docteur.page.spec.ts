import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DocteurPage } from './docteur.page';

describe('DocteurPage', () => {
  let component: DocteurPage;
  let fixture: ComponentFixture<DocteurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocteurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DocteurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
