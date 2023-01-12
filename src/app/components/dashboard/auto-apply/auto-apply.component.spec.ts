import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoApplyComponent } from './auto-apply.component';

describe('AutoApplyComponent', () => {
  let component: AutoApplyComponent;
  let fixture: ComponentFixture<AutoApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoApplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
