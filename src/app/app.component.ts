import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  email: string;
  password: string;
  result: boolean ;
  reto: number;
  op: boolean | false;
  servext: boolean | false;
  combpal: boolean | false;

  constructor(private http: HttpClient,private loginService: LoginService) { }

  onSubmit() {
    const formData = {
      email: this.email,
      password: this.password
    };
    this.loginService.getData(formData).subscribe((response) => {
      alert("Bienvenido "+response.name)
      this.result=true
      this.reto = this.getRandomInt()
      console.log(this.reto) // 0 1 2
      if (this.reto == 0){
        this.op = true
      }else if (this.reto == 1){
        this.servext=true
      } else {
        this.combpal=true
      }
    },
    error => {
      alert("Datos incorrectos")
      console.error('FALLO:', error);
      this.result=false
      // Maneja los errores aquí
    });
  }
  getRandomInt() {
    return Math.floor(Math.random() * 3);
  }
}