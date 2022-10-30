export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    url_img: string;

    constructor(nombre: string, apellido: string, descripcion: string, url_img: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.url_img = url_img;
        this.descripcion = descripcion;
    }
}