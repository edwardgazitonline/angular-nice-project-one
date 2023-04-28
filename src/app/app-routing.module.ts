import { NgModule } from '@angular/core';
import {Routes,RouterModule } from '@angular/router';
import { RouterUpgradeInitializer } from '@angular/router/upgrade';

const routes:Routes = [];

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports: [RouterModule]

})

export class AppRoutingModule{}
