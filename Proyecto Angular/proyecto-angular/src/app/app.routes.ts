import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { VerClientesComponent } from './pages/clients/ver-clientes/ver-clientes.component';
import { AgregarClientesComponent } from './pages/clients/agregar-clientes/agregar-clientes.component';

export const routes: Routes = [
  {
    path: '',
    title: 'home',
    component: HomeComponent,
  },
  {
    path: 'services',
    title: 'Servicios',
    component: ServicesComponent,
  },
  {
    path: 'aboutMe',
    title: '¿Quienes somos?',
    component: AboutMeComponent,
  },
  {
    path: 'contact',
    title: 'Contactanos',
    component: ContactComponent,
  },
  {
    path: 'clients',
    title: 'Mis clientes',
    component: VerClientesComponent,
  },
  {
    path: 'add-clientes',
    title: 'Agregar clientes',
    component: AgregarClientesComponent,
  },
];
