import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SimulationComponent } from './simulation/simulation.component';
import { TheoriesComponent } from './theories/theories.component';
import { AboutComponent } from './about/about.component';
import { OxygenComponent } from './theory/oxygen/oxygen.component';
import { NitrogenComponent } from './theory/nitrogen/nitrogen.component';
import { HalogenComponent } from './theory/halogen/halogen.component';
import { SulfurComponent } from './theory/sulfur/sulfur.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'simulation', component: SimulationComponent },
  { path: 'theories', component: TheoriesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'theory/ferrox-paper-test-oxygen', component: OxygenComponent },
  { path: 'theory/soda-lime-test-nitrogen', component: NitrogenComponent },
  { path: 'theory/beilstein-test-halogen', component: HalogenComponent },
  { path: 'theory/lead-acetate-test-sulfur', component: SulfurComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
