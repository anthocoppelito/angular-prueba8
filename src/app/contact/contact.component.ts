import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IdentificacionComponent } from "./identificacion/identificacion.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    IdentificacionComponent
],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit, OnDestroy {

  formularioContacto: FormGroup
  tipoIdentificacion: string = 'INE';
  mostrarIdentificacion: boolean = false;
  // //Imaginemos que esto viene del back:
  // usuarioActivo : any = {
  //   nombre: 'Juan',
  //   apellido: 'Perez',
  //   curp: 'PEJU123456'
  // };

  constructor(private form: FormBuilder) { 
    this.formularioContacto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: [''],
      tipoIdentificacion: [''],
      email: ['', [Validators.email, Validators.required]]
    })
  }
  ngOnDestroy(): void {
    console.log('Se destruyó el componente');
  }

  ngOnInit(): void {
    this.formularioContacto.get('nombre')?.setValue('Juan');
    this.formularioContacto.get('nombre')?.disable();
    // Esto es una especie de listener o en español oyente/escuchador. es un manejador de eventos o escuchador de cambios
    this.formularioContacto.get('tipoIdentificacion')?.valueChanges.subscribe(valor => {
      this.mostrarIdentificacion = valor !=''
      this.tipoIdentificacion = valor;
    })

    












    // this.formularioContacto.valueChanges.subscribe(valor => {
    //   console.log(valor);
    // })
    
    // this.formularioContacto.get('curp')?.clearValidators();
    // this.formularioContacto.get('curp')?.updateValueAndValidity();
    // this.formularioContacto.get('nombre')?.setValue(this.usuarioActivo);
    // patchvalue sirve para llenar los campos de un formulario con un objeto 
    // que tenga las mismas propiedades que el formulario 
    // this.formularioContacto.patchValue({
    //   nombre: this.usuarioActivo.nombre,
    //   apellido: this.usuarioActivo.apellido,
    //   curp: this.usuarioActivo.curp
    // })
    //this.formularioContacto.get('nombre')?.disable();
    //this.formularioContacto.get('apellido')?.disable();
    //this.formularioContacto.get('curp')?.disable();
  }


  enviar(){
    console.log(this.formularioContacto);
  }

  hasError(controlName: string, errorType: string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched;
  }















  // public usuario: any = {
  //   nombre: '',
  //   email: ''
  // }

  // enviar(){
  //   console.log(this.usuario);
  //   alert('Formulario enviado');
  // }
}
function ngOnDestroy() {
  throw new Error('Function not implemented.');
}

