import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerIndexComponent } from './beer-index.component';

describe('BeerIndexComponent', () => {
  let component: BeerIndexComponent;
  let fixture: ComponentFixture<BeerIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
