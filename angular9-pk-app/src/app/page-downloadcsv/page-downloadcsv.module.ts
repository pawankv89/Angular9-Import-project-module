import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDownloadcsvComponent } from './page-downloadcsv.component'
import { PrimeNGALLModule } from '../primeng-all.module'
import { HttpClientModule } from '@angular/common/http';
import { MaterialALLModule } from '../material-all.module'

@NgModule({
  declarations: [PageDownloadcsvComponent],
  imports: [
    CommonModule,
    PrimeNGALLModule,
    MaterialALLModule,
    HttpClientModule
  ],
  exports: [
    PageDownloadcsvComponent
   ]
})
export class PageDownloadcsvModule { }
