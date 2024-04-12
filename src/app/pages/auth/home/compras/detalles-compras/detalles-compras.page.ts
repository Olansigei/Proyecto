import { Component, Input, OnInit } from '@angular/core';
import { PdfGeneratorService } from 'src/app/services/pdf.service';

@Component({
  selector: 'app-detalles-compras',
  templateUrl: './detalles-compras.page.html',
  styleUrls: ['./detalles-compras.page.scss'],
})
export class DetallesComprasPage implements OnInit {

  @Input() producto;

  constructor( private readonly service: PdfGeneratorService) {}

  createTicket() {     
    this.service.generatePDF('prodyus', 0);
    
}
  ngOnInit() {
  }

}
