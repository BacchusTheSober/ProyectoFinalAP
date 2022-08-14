import { Component } from '@angular/core';
import { persona } from './model/persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoFinal';
  persona: persona = new persona("", "", "");
}
