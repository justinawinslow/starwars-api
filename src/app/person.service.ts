import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Person } from './person';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  // URL to the SWAPI
  private mainUrl = 'https://swapi.co/api/people/';

  constructor(private http: HttpClient) { }

  // method to grab all people from the first page of the SWAPI
  getPeople() : Observable<Person[]> {
    return this.http.get<Person[]>(this.mainUrl).pipe(map(data => {
      return data['results'];
   }));
  }
   
  // method to grab the specific person from the group
  getPerson(id: number) : Observable<Person> {
    const url = this.mainUrl + id +'/'
    return this.http.get<Person>(url);
  }
}
