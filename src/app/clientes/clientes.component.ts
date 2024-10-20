import { Component, Input} from '@angular/core';
import { IClientes } from '../../interfaces/IClientes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  @Input() items : IClientes[] = [];
}
