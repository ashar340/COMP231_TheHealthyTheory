import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountInformationComponent } from './account-information.component';

describe('AccountInformationComponent', () => {
  let component: AccountInformationComponent;
  let fixture: ComponentFixture<AccountInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountInformationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
