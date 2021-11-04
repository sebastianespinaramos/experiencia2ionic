import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicedatosService,Datos } from 'src/app/services/servicedatos.service';
import { Platform, ToastController, IonList} from '@ionic/angular'

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  datos: Datos[] = [];
  newDato: Datos = <Datos>{};
  @ViewChild('myList')myList :IonList;

  constructor(private StorageService: ServicedatosService,
    private plt: Platform, private ToastController: ToastController) {
      this.plt.ready().then(()=>{
        this.loadDatos();
      });
     }

  ngOnInit() {
  }
  
  loadDatos(){
    this.StorageService.getDatos().then(datos=>{
      this.datos=datos;
    });
  }
  addDatos(){
    this.newDato.modified = Date.now();
    this.newDato.id = Date.now();
    this.StorageService.addDatos(this.newDato).then(dato=>{
      this.newDato = <Datos>{};
      this.showToast('!DatosAgregados');
      this.loadDatos();
    })
  }
  updateDatos(dato: Datos){
    dato.nom =`UPDATED: ${dato.nom}`;
    dato.modified = Date.now();
    this.StorageService.updateDatos(dato).then(item=>{
      this.showToast('Elemento Actualizado!')
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }
  deleteDatos(dato: Datos ){
    this.StorageService.deleteDatos(dato.id).then(item=>{
      this.showToast('Elemento Eliminado')
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }
  async showToast(msg){
    const toast = await this.ToastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
