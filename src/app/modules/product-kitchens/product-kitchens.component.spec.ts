import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductKitchensComponent } from './product-kitchens.component';

describe('ProductKitchensComponent', () => {
  let component: ProductKitchensComponent;
  let fixture: ComponentFixture<ProductKitchensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductKitchensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductKitchensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
