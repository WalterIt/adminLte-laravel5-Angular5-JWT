import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderModule } from './../../shared/modules/page-header/page-header.module';
import { DictionariesComponent } from './dictionaries.component';
import { DictionariesRoutingModule } from './dictionaries-routing.module';
import { MainComponent } from './main/main.component';
import { SecondaryComponent } from './secondary/secondary.component';
import { EnglishComponent } from './main/english/english.component';
import { EnPtComponent } from './main/en-pt/en-pt.component';
import { EnFrComponent } from './main/en-fr/en-fr.component';

@NgModule({
    imports: [CommonModule, DictionariesRoutingModule, PageHeaderModule],
    declarations: [DictionariesComponent, MainComponent, SecondaryComponent, EnglishComponent, EnPtComponent, EnFrComponent]
})
export class DictionariesModule { }
