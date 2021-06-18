import { Component, OnInit } from '@angular/core';
import { Tipodecambio } from 'src/app/modelos/tipodecambio';
import { TipodecambioService } from '../../servicios/tipodecambio.service';
import { FormBuilder, FormGroup, FormControl, FormsModule } from '@angular/forms';
import { MonedaService } from '../../servicios/moneda.service';
import { Moneda } from 'src/app/modelos/moneda';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalTipodecambioComponent } from './modal-tipodecambio/modal-tipodecambio.component';
import swal from 'sweetalert';

@Component({
  selector: 'app-tipodecambio',
  templateUrl: './tipodecambio.component.html',
  styleUrls: ['./tipodecambio.component.css']
})
export class TipodecambioComponent implements OnInit {

  modalRef: NgbModalRef;

  // public mr!: NgbModalRef;

  public lista: Tipodecambio[] = [];
  public display: string = 'none';
  public opcmoneda: Moneda;
  public visibletabla: Boolean = true;
  public visibleform: Boolean = false;


  public tipodecambio: Tipodecambio = new Tipodecambio();
  // form: FormGroup = new FormGroup({});
  form: FormGroup = new FormGroup({});
  public listaMonedas: Moneda[] = [];
  public IU: any;
  public boton_primario: any;

  constructor(
    private modalService: NgbModal,
    private tipodecambioService: TipodecambioService,
    private monedaService: MonedaService,
  ) { }

  ngOnInit(): void {

    // this.iniciarModal();
    this.listarMonedas();
    this.listar();
  }

  listar(): void {
    this.tipodecambioService.listarTipodecambio().subscribe(resp => {
      this.lista = resp;
      console.log("a lista tipo de cambio", this.lista);
    })
  }

  listarFiltro(event: any) {
    debugger
    // const value = event.target.value;
    let obj = new Tipodecambio();
    obj.moneda_origen = event;
    debugger
    this.tipodecambioService.listarTipodecambioPorMonedaOrigen(obj).subscribe(resp => {
      this.lista = resp;
    })
  }

  eliminar(objeto: any): void {
    let obj = new Tipodecambio();
    obj.id = objeto.id;

    this.tipodecambioService.eliminarTipodecambio(obj.id).subscribe(resp => {
      swal('Transaccion correcta', 'Se elimino correctamente el tipo de cambio', 'success');
      this.listar();
    })
  }

  openModals(obj: any, acc: number) {
    this.modalRef = this.modalService.open(ModalTipodecambioComponent, { size: 'lg' });
    this.modalRef.componentInstance.obj = obj;
    this.modalRef.componentInstance.accionmodal = acc;
    this.modalRef.result.then((result) => {
        this.listar();      
    }, (reason) => {

    });
  }

  listarMonedas(): void {
    this.monedaService.listarMonedas().subscribe(resp => {
      this.listaMonedas = resp;
    })
  }


}
