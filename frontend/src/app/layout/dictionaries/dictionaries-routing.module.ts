import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DictionariesComponent } from './dictionaries.component';
import { EnglishComponent } from './english/english.component';
import { EnPtComponent } from './en-pt/en-pt.component';
import { EnFrComponent } from './en-fr/en-fr.component';

const routes: Routes = [
    {
        path: '', component: DictionariesComponent,

        children: [
            { path: '', redirectTo: 'dictionaries' },
            { path: 'english', component: EnglishComponent },
            { path: 'en-pt', component: EnPtComponent },
            { path: 'en-fr', component: EnFrComponent }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DictionariesRoutingModule { }
