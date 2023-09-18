import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

const exports:any[] = [
  HeaderComponent,
  FooterComponent,
];
const exportsModuls:any[] = [
  CommonModule,
  RouterModule
];



@NgModule({
  declarations: [
    ...exports,
  ],
  imports: [
    ...exportsModuls
  ],
  exports:[
    ...exports,
    ...exportsModuls
   ],

})
export class SharedModule { }
