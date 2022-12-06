import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencias: any[];

  constructor() {
    this.listaTransferencias = [];
  }
  get transferencias() {
    return this.listaTransferencias;
  }
  addTransferencia(transferencia) {
    this.hidratar(transferencia);
    this.listaTransferencias.push(transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
