import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Person } from '../person';
import { PersonService } from '../person.service';

@Component(
  {
  selector: 'app-star-wars-person',
  templateUrl: './star-wars-person.component.html',
  styleUrls: ['./star-wars-person.component.css']
  })

export class StarWarsPersonComponent implements OnInit 
{
  person: Person;

  constructor(private route: ActivatedRoute,
    private personService: PersonService) 
    { 
    }

  ngOnInit() 
  {
    this.getPerson();
  }

  // grabs the specfic person that is requested based on their ID
  getPerson(): void
  {
    const id = +this.route.snapshot.paramMap.get('id');
    this.personService.getPerson(id).subscribe(person => this.person = person);
  }

}