import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/interfaces/persona';

@Component({
  selector: 'app-agregar-editar-personas',
  templateUrl: './agregar-editar-personas.component.html',
  styleUrls: ['./agregar-editar-personas.component.css']
})
export class AgregarEditarPersonasComponent implements OnInit {

  tipoDocumento: string[] = ['Rut','Libreta civica','Pasaporte'];
  form: FormGroup;
  maxDate: Date;

  constructor(public dialogRef: MatDialogRef<AgregarEditarPersonasComponent>, private fb: FormBuilder) { 
    this.maxDate = new Date();
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(20)]],
      apellido: ['', [Validators.required, Validators.maxLength(20)]],
      correo: ['', [Validators.required, Validators.email]],
      tipoDocumento: [null, Validators.required],
      documento: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
      fechaNacimiento: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  cancelar(){
    this.dialogRef.close();
  }

  addEditPersona(){

    if (this.form.invalid) {
      return;
    }

    const persona: Persona = {
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      correo: this.form.value.correo,
      fechaNacimiento: this.form.value.fechaNacimiento,
      tipoDocumento: this.form.value.tipoDocumento,
      documento: this.form.value.documento
    }
    //console.log(this.form);
  }

}
