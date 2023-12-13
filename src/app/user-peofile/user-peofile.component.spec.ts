import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPeofileComponent } from './user-peofile.component';

describe('UserPeofileComponent', () => {
  let component: UserPeofileComponent;
  let fixture: ComponentFixture<UserPeofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPeofileComponent]
    });
    fixture = TestBed.createComponent(UserPeofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
