import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimnarComponent } from './elimnar.component';

describe('ElimnarComponent', () => {
  let component: ElimnarComponent;
  let fixture: ComponentFixture<ElimnarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElimnarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElimnarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
