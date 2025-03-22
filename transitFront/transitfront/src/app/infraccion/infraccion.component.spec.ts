import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraccionComponent } from './infraccion.component';

describe('InfraccionComponent', () => {
  let component: InfraccionComponent;
  let fixture: ComponentFixture<InfraccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfraccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
