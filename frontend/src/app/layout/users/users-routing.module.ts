import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { PositionsComponent } from './positions/positions.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
    {
        path: '', component: UsersComponent,

        children: [
            { path: '', redirectTo: 'users' },
            { path: 'members', component: MembersComponent },
            { path: 'partners', loadChildren: './partners/partners.module#PartnersModule'},
            { path: 'positions', component: PositionsComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
