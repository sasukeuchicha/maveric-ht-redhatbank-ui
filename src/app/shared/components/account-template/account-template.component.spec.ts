import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTemplateComponent } from './account-template.component';

describe('AccountTemplateComponent', () => {
  let component: AccountTemplateComponent;
  let fixture: ComponentFixture<AccountTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountTemplateComponent]
    });
    fixture = TestBed.createComponent(AccountTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
