import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGamesComponent } from './form-games.component';

describe('FormGamesComponent', () => {
  let component: FormGamesComponent;
  let fixture: ComponentFixture<FormGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
