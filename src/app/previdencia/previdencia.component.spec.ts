import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevidenciaComponent } from './previdencia.component';

describe('PrevidenciaComponent', () => {
  let component: PrevidenciaComponent;
  let fixture: ComponentFixture<PrevidenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevidenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
