import { ComponentFixture, TestBed,  } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BreedsPage } from './breeds.page';

describe('BreedsPage', () => {
  let component: BreedsPage;
  let fixture: ComponentFixture<BreedsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BreedsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function waitForAsync(arg0: () => void): (done: DoneFn) => Promise<void> {
  throw new Error('Function not implemented.');
}

