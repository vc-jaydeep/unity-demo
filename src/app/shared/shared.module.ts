import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { MatMenuModule } from '@angular/material/menu';

import { MatSidenavModule } from '@angular/material/sidenav';

import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';


import { MatTooltipModule } from '@angular/material/tooltip';


const materialModules = [
 

  MatIconModule,


  MatMenuModule,

  MatTableModule,
  MatTabsModule,
  MatToolbarModule,



  MatTooltipModule,

  MatToolbarModule,
  MatIconModule,





  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,


  MatIconModule,



  MatTooltipModule,




];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialModules
  ],
  exports: [...materialModules],
})
export class SharedModule { }
