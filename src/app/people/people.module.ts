import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import routes from './people.routes';
@NgModule({
  imports: [
    CommonModule,
    routes
  ],
  declarations: [PersonComponent]
})
export default class PeopleModule { }