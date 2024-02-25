import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPreferencesComponent } from './components/user-preferences/user-preferences.component';
import { WhatsMyNameComponent } from './components/whats-my-name/whats-my-name.component';

const routes: Routes = [
    {
        path: 'user-context',
        component: UserPreferencesComponent,
        children: [{
            path: 'whats-my-name',
            component: WhatsMyNameComponent
        }]
    },
    {
        path: 'whats-my-name',
        component: WhatsMyNameComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
