import { Component} from '@angular/core';

@Component({
  selector: 'app-codop',
  templateUrl: './codop.component.html',
  styleUrls: ['./codop.component.css']
})
export class CodopComponent  {
  codigoGenerado: number;
  codigo: number;

  ngOnInit() {
    this.codigoGenerado = this.getRandomInt()
    console.log ("se Generó el "+this.codigoGenerado)
  }
  constructor() {}

    onSubmit() {
      const formOp = {
        codigo: this.codigo
      };
      if (this.codigo == this.codigoGenerado){
        alert("El codigo corresponde")
      } else{
        alert("El codigo NO corresponde")
      }
    }

    getRandomInt() {
      return Math.floor(Math.random() * 200000);
    }

    reenviar(){
      this.codigoGenerado = this.getRandomInt()
      console.log ("se Generó el "+this.codigoGenerado)
    }

}

