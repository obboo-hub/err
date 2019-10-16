import { Routes, RouterModule } from '@angular/router';

import { Page1Component } from './page1';
import { Page2Component } from './page2';
import { Page3Component } from './page3';

const routes: Routes = [
    { path: '', pathMatch: 'full' , component: Page1Component },
    { path: 'page2', component: Page2Component },
    { path: 'page3', component: Page3Component },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);