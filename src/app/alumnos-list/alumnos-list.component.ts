import { Component } from '@angular/core';
import { Alumno } from './alumno';

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.css']
})
export class AlumnosListComponent {
  alumnos: Alumno[] = [
    new Alumno('Juan', 18, 'M', 8.5),
    new Alumno('María', 20, 'F', 9.0),
    new Alumno('Pedro', 19, 'M', 7.0),
    new Alumno('Ana', 21, 'F', 9.5)
  ];
}
