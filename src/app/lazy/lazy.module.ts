import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LazyComponent } from './lazy.component'


export const routerConfig = [{
        path: '',
        component: LazyComponent
    }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routerConfig)
  ],
  exports: [RouterModule],
  declarations: [LazyComponent]
})
//export default class LazyModule { }
export class LazyModule { }
