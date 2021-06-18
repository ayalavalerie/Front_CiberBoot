import { Moneda } from './moneda';
  export class Tipodecambio {
  id?: number;
  moneda_origen?: Moneda;
  moneda_destino?: Moneda;
  tipo_cambio?: number;
  fecha?: Date;
}
