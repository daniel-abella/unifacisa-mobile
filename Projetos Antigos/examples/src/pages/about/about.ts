import { ContactPage } from '../contact/contact'; 
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  contactPage = ContactPage;

  constructor(public navCtrl: NavController, public actionSheetController: ActionSheetController, public alertController: AlertController) {

  }


  mostrarActionList() {
    
      let actionList = this.actionSheetController.create({
    
        title: 'Lista de Ações',
        buttons: [
          {
            text: 'Opção 1',
            handler: ()=>{ console.log('Opção 1'); }
          },
          {
            text: 'Opção 2',
            handler: ()=> { console.log('Opção 2'); }
          },
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: ()=> { console.log('Cancelar');}
          }
        ]
    
      });
      actionList.present();
    }

  mostrarAlert(){
    let alerta = this.alertController.create({

      title: 'Titulo',
      subTitle: 'Subtitulo',
      message: 'Minha mensagem',
      buttons:['OK']
    });
    alerta.present();
  }

  mostrarAlertaComCampo(){
    let alerta = this.alertController.create({

      title: 'Titulo',
      subTitle: 'subTitulo',
      message: 'Minha mensagem',
      inputs: [
        {
          name: 'Nome',
          placeholder: "Escreva seu nome"
        }
      ],
      buttons: [
        {
          text: 'Salvar',
          handler: (data) => { console.log(data.nome)}
        
        }
      ]
    });
    alerta.present();
  }

  mostrarAlertaComCheckbox(){
    let alerta = this.alertController.create();
    alerta.setTitle('Cursos');
    alerta.addInput({
      type: 'checkbox',
      label: 'Sistemas de Informação',
      value: 'si'
    });
    alerta.addInput({
      type: 'checkbox',
      label:  'Jogos Digitais',
      value: 'jd'
    });
    alerta.addButton('Cancelar');
    alerta.addButton({
      text:'OK',
      handler: data => { console.log('escolhido foi'  + data);}
    });
    alerta.present();
  }
}

