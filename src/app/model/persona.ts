export class Persona {

    id!:number;
    nombreCompleto:string;
    ciudad:string;
    pais:string;
    emailContacto:string;
    imgBanner:string;
    imgPerfil:string;
    sobreMi:string;
    edad:number;
    emailLogin:string;
    password:string;

    constructor(nombreCompleto:string, ciudad:string, pais:string, emailContacto:string, imgBanner:string, 
    imgPerfil:string, sobreMi:string, edad:number, emailLogin:string, password:string) {
       
        this.nombreCompleto = nombreCompleto;
        this.ciudad = ciudad;
        this.pais = pais;
        this.emailContacto = emailContacto;
        this.imgBanner = imgBanner;
        this.imgPerfil = imgPerfil;
        this.sobreMi = sobreMi;
        this.edad = edad;
        this.emailLogin = emailLogin;
        this.password = password;

    }

}
