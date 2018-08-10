import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetPage } from './get';

@NgModule({
  declarations: [
    GetPage,
  ],
  imports: [
    IonicPageModule.forChild(GetPage),
  ],
})
export class GetPageModule {}
