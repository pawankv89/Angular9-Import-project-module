import { Injectable } from '@angular/core';
import { RemoteService } from './remote.service';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  constructor(private remoteService: RemoteService) {}

  get(file: string) {
    return this.remoteService.get(`/assets/mock-data/${file}`);
  }
}
