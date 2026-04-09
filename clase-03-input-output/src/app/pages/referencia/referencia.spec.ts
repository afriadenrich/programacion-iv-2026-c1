import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Referencia } from './referencia';

describe('Referencia', () => {
  let component: Referencia;
  let fixture: ComponentFixture<Referencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Referencia],
    }).compileComponents();

    fixture = TestBed.createComponent(Referencia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
