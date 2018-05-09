import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductTabsComponent } from './single-product-tabs.component';

describe('SingleProductTabsComponent', () => {
  let component: SingleProductTabsComponent;
  let fixture: ComponentFixture<SingleProductTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleProductTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProductTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
