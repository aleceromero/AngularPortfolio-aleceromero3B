export class Habilidad {

    id!:number;
    habilidad:string;
    nivel:number;
    descripcion:string;

    constructor(habilidad:string,nivel:number,descripcion:string) {

        this.habilidad =habilidad;
        this.nivel =nivel;
        this.descripcion =descripcion;
    }

}
