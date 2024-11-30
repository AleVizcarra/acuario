import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { EspeciesService } from '../../services/especies.service';

@Component({
  selector: 'app-edit-especie',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './edit-especie.component.html',
  styleUrl: './edit-especie.component.css',
})
export class EditEspecieComponent implements OnInit {
  especieForm: FormGroup;
  especieId: string | null = null;
  showSuccessMessage = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private service: EspeciesService
  ) {
    this.especieForm = this.fb.group({
      especie: [''],
      nombre_cientifico: [''],
      descripcion: [''],
      imagen: [''],
    });
  }

  ngOnInit(): void {
    // Obtener el ID de la película desde los parámetros de la ruta
    this.especieId = this.route.snapshot.paramMap.get('id');
    if (this.especieId) {
      // Cargar los datos de la película en el formulario
      this.service.getEspecie(this.especieId).subscribe((data) => {
        this.especieForm.patchValue(data);
      });
    }
  }

  // Método para enviar el formulario y actualizar la película en la base de datos
  onSubmit() {
    if (this.especieId && this.especieForm.valid) {
      this.service
        .updateEspecie(this.especieId, this.especieForm.value)
        .subscribe(() => {
          this.showSuccessMessage = true; // Muestra la alerta de éxito

          // Espera 1.5 segundos antes de redirigir
          setTimeout(() => {
            this.router.navigate(['/especies']); // Redirige al catálogo de películas
          }, 1500);
        });
    }
  }

  closeAlert() {
    this.showSuccessMessage = false; // Cierra la alerta manualmente
  }

  cancel() {
    this.router.navigate(['/especies']);
  }
}
