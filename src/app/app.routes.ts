import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EspeciesComponent } from './pages/especies/especies.component';
import { EspecieComponent } from './pages/especie/especie.component';

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
];
