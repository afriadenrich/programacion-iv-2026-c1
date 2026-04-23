import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ahorcado } from './ahorcado';

describe('Ahorcado', () => {
  let component: Ahorcado;
  let fixture: ComponentFixture<Ahorcado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ahorcado],
    }).compileComponents();

    fixture = TestBed.createComponent(Ahorcado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
