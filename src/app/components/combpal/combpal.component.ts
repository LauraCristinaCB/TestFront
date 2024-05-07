import { Component } from '@angular/core';
import { combPalabras } from 'src/app/mock-combPalabra';
import { CombPablabra } from 'src/app/combPablabra';



@Component({
  selector: 'app-combpal',
  templateUrl: './combpal.component.html',
  styleUrls: ['./combpal.component.css']
})

export class CombpalComponent {
  palabra: string;
  frase: string;
  llave: string;
  combinacion: CombPablabra

  constructor() {}

    onSubmit() {
      const formComb = {
        palabra: this.palabra,
        frase: this.frase,
        llave: this.llave
      };
      this.combinacion = {palabra: formComb.palabra, frase:formComb.frase, llave:formComb.llave}

      combPalabras.forEach(  (comb) => {
        if(comb.palabra == this.combinacion.palabra){
          if(comb.frase == this.combinacion.frase){
            if(comb.llave == this.combinacion.llave){
              alert("la combinación existe")
            }
          }
        } else {
          alert("la combinación NO existe")
        }
    });
    }

    getRandomInt() {
      return Math.floor(Math.random() * 200000);
    }

    reenviar(){
      this.palabra=''
      this.frase=''
      this.llave=''
    }

}
