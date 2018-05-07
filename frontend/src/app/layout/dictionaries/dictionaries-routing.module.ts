import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DictionariesComponent } from './dictionaries.component';
import { SecondaryComponent } from './secondary/secondary.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    {
        path: '', component: DictionariesComponent,
        children: [
            { path: '', redirectTo: 'dictionaries' },
            { path: 'main', component: MainComponent },
            { path: 'secondary', component: SecondaryComponent }

]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DictionariesRoutingModule { }
