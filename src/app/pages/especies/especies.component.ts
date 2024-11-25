import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EspeciesService } from '../../services/especies.service';

@Component({
  selector: 'app-especies',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './especies.component.html',
  styleUrl: './especies.component.css',
})
export class EspeciesComponent implements OnInit {
  especies: any = [];

  constructor(private service: EspeciesService) {}

  ngOnInit(): void {
    this.service.getEspecies().subscribe((data: any) => {
      this.especies = data;
    });
  }
}
