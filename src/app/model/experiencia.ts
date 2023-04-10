export class Experiencia {

    id?:number;
    puesto:string;
    fechaInicio:string;
    fechaFin:string;
    empresa:string;
    descripcion:string;

    constructor(puesto:string,fechaInicio:string,fechaFin:string,empresa:string,descripcion:string) {

        this.puesto = puesto;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.empresa = empresa;
        this.descripcion = descripcion;
    }

}
