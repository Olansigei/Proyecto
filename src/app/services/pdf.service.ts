import { Injectable } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root'
})
export class PdfGeneratorService {

  generatePDF(nombre: string, precio: number): void {
    const documentDefinition = {
      content: [
        `Nombre: ${nombre}`,
        `Precio: ${precio}`
      ]
    };

    pdfMake.createPdf(documentDefinition).open();
  }
}