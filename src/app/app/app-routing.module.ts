import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from '../people/person/person.component';

const routes: Routes = [
	{
		path: '',
		children: []
	},
	{
		path: 'people',
		component: PersonComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
