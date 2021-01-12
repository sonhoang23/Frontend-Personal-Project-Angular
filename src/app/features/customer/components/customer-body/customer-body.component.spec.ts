import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBodyComponent } from './customer-body.component';

describe('CustomerBodyComponent', () => {
  let component: CustomerBodyComponent;
  let fixture: ComponentFixture<CustomerBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
