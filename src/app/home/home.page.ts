import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private http: HttpClient,
    private alertController: AlertController,
  ) {}

  linkVideo: string = "";

  async downloadMP3() {
    const confirmed = await this.showConfirmation('MP3');
    if (confirmed) {
      console.log('Descargando en formato MP3...');
    }
  }

  async downloadMP4() {
    const confirmed = await this.showConfirmation('MP4');
    if (confirmed) {
      console.log('Descargando en formato MP4...');
    }
  }

  // Método para mostrar la ventana de confirmación
  async showConfirmation(format: string): Promise<boolean> {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: `¿Deseas descargar el video en formato ${format}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => false,
        },
        {
          text: 'Aceptar',
          handler: () => true,
        },
      ],
    });

    await alert.present();

    // Esperar la selección del usuario
    const { role } = await alert.onDidDismiss();
    return role !== 'cancel';
  }
}
