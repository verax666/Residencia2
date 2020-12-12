import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalTextPage } from './modal-text.page';

describe('ModalTextPage', () => {
  let component: ModalTextPage;
  let fixture: ComponentFixture<ModalTextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTextPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
