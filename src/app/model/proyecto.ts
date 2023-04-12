export class Proyecto {

    id!:number;
    proyecto:string;
    imgProyecto:string;
    urlProyecto:string;
    descripcion:string;

    constructor(proyecto:string,imgProyecto:string,urlProyecto:string,descripcion:string) {

        this.proyecto = proyecto;
        this.imgProyecto = imgProyecto;
        this.urlProyecto = urlProyecto;
        this.descripcion = descripcion;
    }

}
