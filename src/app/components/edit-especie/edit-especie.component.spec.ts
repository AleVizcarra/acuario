import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEspecieComponent } from './edit-especie.component';

describe('EditEspecieComponent', () => {
  let component: EditEspecieComponent;
  let fixture: ComponentFixture<EditEspecieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEspecieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditEspecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
