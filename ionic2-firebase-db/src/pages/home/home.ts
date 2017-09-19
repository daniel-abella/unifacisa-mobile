import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
	todos: FirebaseListObservable<any>;

  constructor(private navCtrl: NavController, public database: AngularFireDatabase, public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController) {
      this.todos = database.list('/todos')
  }

  addTodo(){
    let prompt = this.alertCtrl.create({
      title: 'Atividade',
      message: "Título da Atividade",
      inputs: [
        {
          name: 'title',
          placeholder: 'Atividade'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.todos.push({
              title: data.title
            });
          }
        }
      ]
    });
    prompt.present();
}

showOptions(todoId, todoTitle) {
  let actionSheet = this.actionSheetCtrl.create({
    title: 'Funções',
    buttons: [
      {
        text: 'Deletar Atividade',
        role: 'destructive',
        handler: () => {
          this.removeTodo(todoId);
        }
      },{
        text: 'Atualizar Atividade',
        handler: () => {
          this.updateTodo(todoId, todoTitle);
        }
      },{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancelar');
        }
      }
    ]
  });
  actionSheet.present();
}

removeTodo(todoId: string){
  this.todos.remove(todoId);
}

updateTodo(todoId, todoTitle){
  let prompt = this.alertCtrl.create({
    title: 'Atividade',
    message: "Atualize o título da atividade",
    inputs: [
      {
        name: 'title',
        placeholder: 'Título',
        value: todoTitle
      },
    ],
    buttons: [
      {
        text: 'Cancelar',
        handler: data => {
          console.log('Cancelar');
        }
      },
      {
        text: 'Salvar',
        handler: data => {
          this.todos.update(todoId, {
            title: data.title
          });
        }
      }
    ]
  });
  prompt.present();
}

}
