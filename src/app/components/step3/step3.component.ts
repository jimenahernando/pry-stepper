import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.css'
})
export class Step3Component {
  @Output() formSubmit = new EventEmitter<any>();
  form: FormGroup;

  animales = [
    { id: 1, nombre: 'Perro' },
    { id: 2, nombre: 'Gato' },
    { id: 3, nombre: 'Pájaro' },
    { id: 4, nombre: 'Pez' },
    { id: 5, nombre: 'Conejo' },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      animales: this.fb.array([]),
    });
  }

  get animalesArray(): FormArray {
    return this.form.get('animales') as FormArray;
  }

  onAnimalChange(event: any, animalId: number) {
    if (event.checked) {
      this.animalesArray.push(this.fb.group({ id: animalId }));
    } else {
      const index = this.animalesArray.controls.findIndex(x => x.value.id === animalId);
      this.animalesArray.removeAt(index);
    }
  }

  submitForm() {
    this.formSubmit.emit(this.animalesArray.value);
  }
}
