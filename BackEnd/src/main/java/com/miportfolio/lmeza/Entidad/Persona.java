
package com.miportfolio.lmeza.Entidad;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 *
 * @author Leandro
 */
@Entity
public class Persona {
   
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    @NotNull
    @Size(min = 1, max = 50, message = "No cumple con los parametros /nombre/")
    private String nombre;
    
    @NotNull
    @Size(min = 1, max = 50, message = "No cumple con los parametros /apellido/")
    private String apellido;
    
    @NotNull
    @Size(min = 1, max = 50, message = "No cumple con los parametros /url_img/")
    private String url_img;
    
    @NotNull
    private String descripcion;

    public Persona() {
    }

    public Persona(String nombre, String apellido, String url_img, String descripcion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.url_img = url_img;
        this.descripcion = descripcion;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getUrl_img() {
        return url_img;
    }

    public void setUrl_img(String url_img) {
        this.url_img = url_img;
    }

    
}

