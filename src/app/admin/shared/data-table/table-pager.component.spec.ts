import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePagerComponent } from './table-pager.component';

describe('TablePagerComponent', () => {
  let component: TablePagerComponent;
  let fixture: ComponentFixture<TablePagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
