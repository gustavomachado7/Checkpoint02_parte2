import { Component } from '@angular/core';
import { EstadoService } from '../../services/estado.service';
import { Estado } from '../../interfaces/Estado';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estado.component.html',
  styleUrl: './estado.component.css',
})
export class EstadoComponent {
  estados: Estado[] = [];
  constructor(private EstadoService: EstadoService) {}

  listar(): void {
    this.EstadoService.listar().subscribe((listEstado) => (this.estados = listEstado));
  }

  ngOnInit(): void {
    this.listar();
  }
}
