import { Routes } from '@angular/router';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { PropietarioComponent } from './propietario/propietario.component';
import { InfraccionComponent } from './infraccion/infraccion.component';
import { HistoricoComponent } from './historico/historico.component';

export const routes: Routes = [
    { path: 'vehiculos', component: VehiculoComponent },
    { path: 'propietarios', component: PropietarioComponent },
    { path: 'infraccion', component: InfraccionComponent },
    { path: 'historico', component: HistoricoComponent },
    { path: '**', redirectTo: '/vehiculos', pathMatch: 'full' }
];