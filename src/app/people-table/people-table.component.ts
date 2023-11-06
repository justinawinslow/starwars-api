import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component(
  {
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.css']
  })
export class PeopleTableComponent implements OnInit 
{
  people: Person[];

  // grabbing the servive to connect to the API
  constructor(private personService: PersonService) 
  { 
  }

  ngOnInit() 
  {
    this.getPeople();
  }

  // Grabs the people from the API
  getPeople(): void
  {
    this.personService.getPeople().subscribe(people => this.people = people);
  }
}