import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserByRoleComponent } from './get-user-by-role.component';

describe('GetUserByRoleComponent', () => {
  let component: GetUserByRoleComponent;
  let fixture: ComponentFixture<GetUserByRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetUserByRoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetUserByRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
