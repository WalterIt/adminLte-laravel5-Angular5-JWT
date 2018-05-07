import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderModule } from './../../shared/modules/page-header/page-header.module';
import { DictionariesRoutingModule } from './dictionaries-routing.module';

import { DictionariesComponent } from './dictionaries.component';
import { EnglishComponent } from './english/english.component';
import { EnPtComponent } from './en-pt/en-pt.component';
import { EnFrComponent } from './en-fr/en-fr.component';

@NgModule({
    imports: [CommonModule,  PageHeaderModule, DictionariesRoutingModule],

    declarations: [DictionariesComponent, EnglishComponent, EnPtComponent, EnFrComponent]
})

export class DictionariesModule { }
