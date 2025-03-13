import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'identificacion-input',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './identificacion.component.html',
  styleUrl: './identificacion.component.css'
})
export class IdentificacionComponent implements OnChanges{

  @Input() tipoIdentificacion: string = 'INE';

  formularioDocumento: FormGroup
  variableNueva: string = 'INE';
  
  
  
    constructor(private form: FormBuilder) { 
      this.formularioDocumento = this.form.group({
        identificacion: ['', [Validators.required, Validators.minLength(10)]],
      })
    }
  ngOnChanges(changes: SimpleChanges): void {
    this.variableNueva=(changes?.['tipoIdentificacion'].currentValue);
    
    // console.log(changes);
  }

    hasError(controlName: string, errorType: string){
      return this.formularioDocumento.get(controlName)?.hasError(errorType) && this.formularioDocumento.get(controlName)?.touched;
    }
}
