import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SitiosPage } from './sitios.page';

describe('SitiosPage', () => {
  let component: SitiosPage;
  let fixture: ComponentFixture<SitiosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitiosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SitiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
