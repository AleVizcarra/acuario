import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EspeciesComponent } from './pages/especies/especies.component';
import { EspecieComponent } from './pages/especie/especie.component';
import { AddEspecieComponent } from './components/add-especie/add-especie.component';
import { EditEspecieComponent } from './components/edit-especie/edit-especie.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'especies',
    component: EspeciesComponent,
  },
  {
    path: 'especie/:id',
    component: EspecieComponent,
  },
  {
    path: 'add-especie',
    component: AddEspecieComponent,
  },
  {
    path: 'edit-especie/:id',
    component: EditEspecieComponent,
  },
];
