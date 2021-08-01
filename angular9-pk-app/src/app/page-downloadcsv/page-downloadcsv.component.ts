import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { DownloadService } from '../download-file.service'

@Component({
  selector: 'app-page-downloadcsv',
  templateUrl: './page-downloadcsv.component.html',
  styleUrls: ['./page-downloadcsv.component.scss']
})
export class PageDownloadcsvComponent implements OnInit {

  constructor(private downloadService: DownloadService) { }

  ngOnInit(): void {
  }

  clickButton(){
    alert('Click me');

    const filename = 'countries.json';
    this.downloadService.get(filename).subscribe((response)=>{
      console.log('Response ', response);
     },(error)=>{
      console.log('Error ', error);
     })
  }

  /*
    clickButton(){
     this.downloadService.exportFile().subscribe((response)=>{
      console.log('Response ', response);
     },
     (error)=>{
      console.log('Error ', error);
      console.log('Error Status ', error.status);
      if (error.status <= 299 && error.status >= 200) {
        const url = error.url;
        window.location.assign(url);
      } else if (error.status === 0)  {
        const url = error.url;
        window.location.assign(url);
      } else {
        console.log('Record not found');
      }
    })
  }
  */

  /*
  downloadFile() {
    //const csvContent = JSON.stringify(this.data.integration);
    const csvContent = JSON.stringify(this.data.integration, null, 2); // For Format json file
    const filename = 'export-address.csv';
    const blob = new Blob([csvContent], { type: 'application/json;charset=utf-8;' });
      const link = document.createElement('a');
      if (link.download !== undefined) {
        // Browsers that support HTML5 download attribute
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
  }
  */

  /*
  clickButton(){
    this.downloadService.exportFile().subscribe((response)=>{
     console.log('Response ', response);
    },
    (error)=>{
     console.log('Error ', error);
     console.log('Error Status ', error.status);
     if (error.status === 200 || error.status === 0) {
       //console.log('exportContacts error.error.text ', error.error.text);
       this.downloadFile(error.error.text); // Worked here
     }
     if (error.status === 400) {
       
     }
   })
 }

  downloadFile(csvArray: any) {
    const a = document.createElement('a');
    const blob = new Blob([csvArray], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'export-address.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }
  */

  /*
  downloadFile_old(data: any) {
    const replacer = (key, value) => (value === null ? '' : value); // specify how you want to handle null values here
    const header = Object.keys(data[0]);
    const csv = data.map((row) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(',')
    );
    csv.unshift(header.join(','));
    const csvArray = csv.join('\r\n');
  
    const a = document.createElement('a');
    const blob = new Blob([csvArray], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
  
    a.href = url;
    a.download = 'myFile.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }
  */

}
