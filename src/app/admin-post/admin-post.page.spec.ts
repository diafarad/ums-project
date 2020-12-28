import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminPostPage } from './admin-post.page';

describe('AdminPostPage', () => {
  let component: AdminPostPage;
  let fixture: ComponentFixture<AdminPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
