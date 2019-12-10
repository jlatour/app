import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylListPageComponent } from './vinyl-list-page.component';

describe('VinylListPageComponent', () => {
  let component: VinylListPageComponent;
  let fixture: ComponentFixture<VinylListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinylListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
