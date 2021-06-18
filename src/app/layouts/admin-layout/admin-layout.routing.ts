import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { TipodecambioComponent } from 'src/app/vistas/tipodecambio/tipodecambio.component';
import { CuentausuarioComponent } from 'src/app/vistas/cuentausuario/cuentausuario.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'tipodeCambio', component:TipodecambioComponent},
    { path: 'mantecliente' , component:CuentausuarioComponent}
];
