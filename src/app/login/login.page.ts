import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Button, element } from 'protractor';
import { from } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { PatternValidator } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public router:Router,public toastControl: ToastController, public alertControl: AlertController) { }

  ngOnInit() {
  }

  user: any;
  senha: any

  Loginok: any = {
    senha:'12345678',
    user:'test@hotmail.com',
  }

  acessar() {
    //Validation
    var parttens = (<HTMLSelectElement>document.getElementById('email')).value;
    var senha = (<HTMLSelectElement>document.getElementById('senha')).value
    var erro = false;
    //validation end

    //login if
    if(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/.test(parttens) && senha.length >= 8 ){ 
      erro = false;
      console.log(erro);
      if (this.senha == this.Loginok.senha && this.user == this.Loginok.user) {
        this.Loginmec();
        this.router.navigate(['home'])
      }
    }
    //login end

    //login erro
    else{
      erro = true
      console.log(erro);
      this.alerterro();
    }
    //login erro end
  }


  async msgtoast(msg: string, duracao: number, posição: any) {

    const toast = await this.toastControl.create({
      header: "Safe",

      animated: true,
      cssClass: "toast-scheme",
      message: msg,
      duration: duracao,
      position: posição
    })
    toast.present();
  }

  async alerterro() {
    const alert = await this.alertControl.create({
      cssClass: "alert-scheme",
      header: 'Erro',
      subHeader: 'Erro no login',
      message: '<p>E-mail/Senha Invalidos.</p>',
      buttons: ['OK']
    })
    await alert.present()
  }

  Loginmec() {
    console.log('centro');
    this.msgtoast('Login realizado com sucesso.', 5000, "center");
  }
}
