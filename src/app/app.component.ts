import { Component } from '@angular/core';
import { Estudiante } from "./models/estudiante";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estudianteArray: Estudiante[] = [
    {codigo:160003441, nombre: "Hermes Diaz", correo:"hermes.diaz@hotmail.com"},
    {codigo:160003440, nombre: "Hermes A. Diaz", correo:"hermes.diaz1997@hotmail.com"}
  ];

  selectedEstudiante: Estudiante = new Estudiante();

  addOrEdit(){
    if(this.selectedEstudiante.codigo == null){
    this.estudianteArray.push(this.selectedEstudiante);
    this.selectedEstudiante=new Estudiante();
    }
    this.selectedEstudiante=new Estudiante();
  }
  openForEdit(estudiante:Estudiante){
    this.selectedEstudiante=estudiante;
  }
}
