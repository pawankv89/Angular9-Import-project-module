import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDownloadcsvComponent } from './page-downloadcsv.component';

describe('PageDownloadcsvComponent', () => {
  let component: PageDownloadcsvComponent;
  let fixture: ComponentFixture<PageDownloadcsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDownloadcsvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDownloadcsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
