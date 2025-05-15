import { Routes } from '@angular/router';
import { HomeComponent } from './features/components/home/home.component';
import { AboutComponent } from './features/components/about/about.component';
import { ContactComponent } from './features/components/contact/contact.component';
import { MissionComponent } from './features/components/mission/mission.component';
import { ProductsComponent } from './features/components/products/products.component';
import { OurservicesComponent } from './features/components/ourservices/ourservices.component';
import { CommingSoonComponent } from './features/components/comming-soon/comming-soon.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'mission', component: MissionComponent },
    { path: 'ourservices', component: OurservicesComponent },
    { path: '404', component: HomeComponent },
    { path: 'comming-soon', component: CommingSoonComponent },
    { path: '**', redirectTo: '' }
];
