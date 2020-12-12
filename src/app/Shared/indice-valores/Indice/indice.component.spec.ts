import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndiceComponent } from './indice.component';

describe('IndiceComponent', () => {
  let component: IndiceComponent;
  let fixture: ComponentFixture<IndiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiceComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
