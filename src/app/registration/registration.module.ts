import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormComponent,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    FormComponent
  ]
})
export class RegistrationModule { }
