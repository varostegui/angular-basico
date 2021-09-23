import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent  {

  @Input() nuevo: Personaje ={
    nombre:'',
    poder:0
  }

  constructor(private dbzService: DbzService){
    
  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    
    if (this.nuevo.nombre.trim().length===0) {
      return;
    }

    this.dbzService.agregarPersonaje(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.nuevo = {
      nombre:'',
      poder:0
    }
  }

}
