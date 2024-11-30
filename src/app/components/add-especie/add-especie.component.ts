import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EspeciesService } from '../../services/especies.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-especie',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './add-especie.component.html',
  styleUrl: './add-especie.component.css',
})
export class AddEspecieComponent {
  especie = {
    especie: '',
    nombre_cientifico: '',
    descripcion: '',
    imagen: '',
  };

  isEspecieAdded = false; // Variable para controlar la alerta

  constructor(private service: EspeciesService, private router: Router) {}

  onSubmit() {
    this.service.addEspecie(this.especie).subscribe(
      (response) => {
        console.log('Especie agregada', response);
        this.isEspecieAdded = true; // Activa la alerta al agregar la película
        setTimeout(() => {
          this.isEspecieAdded = false; // Desactiva la alerta después de 1.5 segundos
          this.router.navigate(['/especies']); // Redirige a 'especies' después de mostrar la alerta
        }, 1500);
      },
      (error) => {
        console.error('Error al agregar la especie', error);
      }
    );
  }

  cancel() {
    this.router.navigate(['/especies']);
  }
}
