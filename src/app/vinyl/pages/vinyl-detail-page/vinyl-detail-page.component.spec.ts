import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylDetailPageComponent } from './vinyl-detail-page.component';

describe('VinylDetailPageComponent', () => {
  let component: VinylDetailPageComponent;
  let fixture: ComponentFixture<VinylDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinylDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
