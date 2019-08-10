import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTvunitsComponent } from '@/modules/product-tvunits/product-tvunits.component';

describe('ProductTvunitsComponent', () => {
  let component: ProductTvunitsComponent;
  let fixture: ComponentFixture<ProductTvunitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTvunitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTvunitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
