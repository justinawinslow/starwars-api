import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsPersonComponent } from './star-wars-person.component';

describe('StarWarsPeopleComponent', () => {
  let component: StarWarsPersonComponent;
  let fixture: ComponentFixture<StarWarsPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarWarsPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarsPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
