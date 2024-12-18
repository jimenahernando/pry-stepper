import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  step1Data: any;
  step2Data: any;
  step3Data: any;

  constructor(private fb: FormBuilder) {}

  // Método para recibir datos de los pasos
  receiveStep1Data(data: any) {
    this.step1Data = data;
  }

  receiveStep2Data(data: any) {
    this.step2Data = data;
  }

  receiveStep3Data(data: any) {
    this.step3Data = data;
  }

  // Método para generar el objeto final
  onSubmit() {
    const finalObject = {
      ...this.step1Data,
      ...this.step2Data,
      animales: this.step3Data
    };
    console.log('Objeto final:', finalObject);
  }
}
