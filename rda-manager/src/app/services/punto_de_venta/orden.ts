import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Orden {
  itemsSeleccionados=[]
  guardarItemsSeleccionados(items:any){
    this.itemsSeleccionados=items
    console.log("Items Guardados")
  }

  get items(){
    return this.itemsSeleccionados
  }
}
