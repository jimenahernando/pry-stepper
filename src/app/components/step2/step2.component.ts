import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.css'
})
export class Step2Component {
  @Output() formSubmit = new EventEmitter<any>();
  form: FormGroup;

  paises = ['Argentina', 'México', 'España', 'Colombia', 'Chile'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      pais: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    }
  }
}
