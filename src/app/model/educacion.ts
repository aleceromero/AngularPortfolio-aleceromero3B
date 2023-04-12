export class Educacion {

    id!:number;
    titulo:string;
    fechaInicio:string;
    fechaFin:string;
    establecimiento:string;
    descripcion:string;

    constructor(titulo:string,fechaInicio:string,fechaFin:string,establecimiento:string,descripcion:string) {

        this.titulo = titulo;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.establecimiento = establecimiento;
        this.descripcion = descripcion;
    }

}
