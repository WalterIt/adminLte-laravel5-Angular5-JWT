import { PartnersModule } from './partners/partners.module';
import { PartnersRoutingModule } from './partners/partners-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderModule } from './../../shared/modules/page-header/page-header.module';
import { UsersRoutingModule } from './users-routing.module';

import { MembersModule } from './members/members.module';
import { UsersComponent } from './users.component';
import { PositionsComponent } from './positions/positions.component';

@NgModule({
    imports: [CommonModule, UsersRoutingModule, PageHeaderModule, PartnersRoutingModule, MembersModule, PartnersModule],

    declarations: [UsersComponent, PositionsComponent]
})
export class UsersModule { }
