import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] =['SpiderMan','IronMan','Thor','Hulk'];
  borrar: string ='';

  borrarHeroe(){
    this.borrar = this.heroes.shift() || '';
  }

}