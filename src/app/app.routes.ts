import { Routes } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { TriggerComponent } from './trigger/trigger.component';
import { OtroComponenteComponent } from './otro-componente/otro-componente.component';

export const routes: Routes = [
    { path: 'trigger', component: TriggerComponent },
    { path: 'otro-componente', component: OtroComponenteComponent}
];
