import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EspeciesService } from '../../services/especies.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-especie',
  standalone: true,
  imports: [NgIf],
  templateUrl: './especie.component.html',
  styleUrl: './especie.component.css',
})
export class EspecieComponent implements OnInit {
  especie: any;
  showDeleteMessage = false; // Para la alerta de eliminación

  constructor(
    private route: ActivatedRoute,
    private service: EspeciesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getEspecie(id).subscribe((data: any) => {
      this.especie = data;
    });
  }

  editEspecie() {
    this.router.navigate(['/edit-especie', this.especie.id]); // Redirige a EditMovieComponent con el ID de la película
  }

  confirmDelete() {
    if (confirm('¿Estás seguro de que deseas eliminar esta especie?')) {
      this.deleteEspecie();
    }
  }

  deleteEspecie() {
    if (this.especie.id) {
      this.service.deleteEspecie(this.especie.id).subscribe(() => {
        this.showDeleteMessage = true; // Muestra la alerta de eliminación
        setTimeout(() => {
          this.router.navigate(['/especies']); // Redirige al catálogo
        }, 1500);
      });
    }
  }

  closeAlert() {
    this.showDeleteMessage = false;
  }
}
