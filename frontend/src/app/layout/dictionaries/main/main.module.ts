import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnglishComponent } from './english/english.component';
import { EnPtComponent } from './en-pt/en-pt.component';
import { EnFrComponent } from './en-fr/en-fr.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EnglishComponent, EnPtComponent, EnFrComponent]
})
export class MainModule { }
