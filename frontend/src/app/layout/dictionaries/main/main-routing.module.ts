import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { EnglishComponent } from './english/english.component';
import { EnPtComponent } from './en-pt/en-pt.component';
import { EnFrComponent } from './en-fr/en-fr.component';

const routes: Routes = [
    {
        path: '', component: MainComponent,
        children: [
            { path: '', redirectTo: 'main' },
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
