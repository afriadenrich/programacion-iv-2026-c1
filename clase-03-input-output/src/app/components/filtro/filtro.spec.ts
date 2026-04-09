import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filtro } from './filtro';

describe('Filtro', () => {
  let component: Filtro;
  let fixture: ComponentFixture<Filtro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Filtro],
    }).compileComponents();

    fixture = TestBed.createComponent(Filtro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
