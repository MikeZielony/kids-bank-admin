import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationAccountComponent } from './operation-account.component';

describe('OperationAccountComponent', () => {
  let component: OperationAccountComponent;
  let fixture: ComponentFixture<OperationAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
