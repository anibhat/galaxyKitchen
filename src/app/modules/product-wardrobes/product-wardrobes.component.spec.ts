import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWardrobesComponent } from '@/modules/product-wardrobes/product-wardrobes.component';

describe('ProductWardrobesComponent', () => {
  let component: ProductWardrobesComponent;
  let fixture: ComponentFixture<ProductWardrobesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductWardrobesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWardrobesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
