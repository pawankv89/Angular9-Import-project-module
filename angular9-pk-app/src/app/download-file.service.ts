import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { reduce, catchError, map, switchMap, filter } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { RemoteService, MockDataService } from '@pks/remote';

export const BASE_URL = 'https://github.com/pawankv89/files/blob/main/files';

@Injectable({
    providedIn: 'root'
})

export class DownloadService {
    constructor(
      private httpClient: HttpClient,
      private remoteService: RemoteService,
      private mockDataService: MockDataService
    ) {}
    
    exportFile() {
       const url = `${BASE_URL}/sample-address-list.csv`;
       return this.remoteService.get(url);
       //return this.httpClient.get(url);
      }
     
      get(file: string) {
        return this.mockDataService.get(`${file}`);
      }
}