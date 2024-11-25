import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EspeciesService } from '../../services/especies.service';

@Component({
  selector: 'app-especie',
  standalone: true,
  imports: [],
  templateUrl: './especie.component.html',
  styleUrl: './especie.component.css',
})
export class EspecieComponent implements OnInit {
  especie: any;

  constructor(
    private route: ActivatedRoute,
    private service: EspeciesService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getEspecie(id).subscribe((data: any) => {
      this.especie = data;
    });
  }
}
