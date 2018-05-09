import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductInfomationComponent } from './single-product-infomation.component';

describe('SingleProductInfomationComponent', () => {
  let component: SingleProductInfomationComponent;
  let fixture: ComponentFixture<SingleProductInfomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleProductInfomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProductInfomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
