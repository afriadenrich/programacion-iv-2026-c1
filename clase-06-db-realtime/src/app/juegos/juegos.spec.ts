import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegos } from './juegos';

describe('Juegos', () => {
  let component: Juegos;
  let fixture: ComponentFixture<Juegos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Juegos],
    }).compileComponents();

    fixture = TestBed.createComponent(Juegos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
