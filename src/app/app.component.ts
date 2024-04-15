import { Component, importProvidersFrom } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Alumno } from './models/alumno';
import { NgFor,NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, NgForOf, FormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  alumnosArray: Alumno[] = [
    { id:1, nombre: "Juan Manuel", grado: "5", edad: 30 },
    { id:2, nombre: "María Fernanda", grado: "4", edad: 25 },
    { id:3, nombre: "Juan Manuel", grado: "5", edad: 21 },
    { id:4, nombre: "Alexa", grado: "3", edad: 18 },
    { id:5, nombre: "Ramón Alejandro", grado: "2", edad: 22 },
    { id:6, nombre: "Fernando", grado: "6", edad: 34 },
    { id:7, nombre: "Marco Antonio", grado: "2", edad: 15 },
    { id:8, nombre: "Ulises Fermin", grado: "7", edad: 20 }
  ]
  seleAlumno: Alumno = new Alumno();

  addOrEdit() {
    if (this.seleAlumno.id === 0)
      {
        this.seleAlumno.id = this.alumnosArray.length + 1;
        this.alumnosArray.push(this.seleAlumno);
      }
      this.seleAlumno=new Alumno();
  }
  openForEdit(alumnito:Alumno) {
    this.seleAlumno=alumnito;
   }

  delete() {
    if(confirm("Deseas realmente eliminar el alumno seleccionado?"))
      {
        this.alumnosArray=this.alumnosArray.filter(x=>x!=this.seleAlumno);
        this.seleAlumno=new Alumno();
      }
   }

}
