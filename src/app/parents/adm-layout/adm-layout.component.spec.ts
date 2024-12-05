import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmLayoutComponent } from './adm-layout.component';

describe('AdmLayoutComponent', () => {
  let component: AdmLayoutComponent;
  let fixture: ComponentFixture<AdmLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
