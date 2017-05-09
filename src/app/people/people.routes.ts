import { PersonComponent } from './person/person.component';
import {RouterModule} from '@angular/router';
const routes = [
    {path: '', component: PersonComponent}
];

export default RouterModule.forChild(routes);
