package com.miportfolio.lmeza.Servicio;

import com.miportfolio.lmeza.Entidad.Persona;
import com.miportfolio.lmeza.Repositorio.IPersonaRepositorio;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Leandro
 */
@Service
@Transactional
public class ImpPersonaServicio{
    @Autowired IPersonaRepositorio iPersonaRepositorio;

    public List<Persona> list(){
        return iPersonaRepositorio.findAll();
    }
    
    public Optional<Persona> getOne(int id){
        return iPersonaRepositorio.findById(id);
    }
    
    public Optional<Persona> getByNombre(String nombre){
        return iPersonaRepositorio.findByNombre(nombre);
    }
    
    public void save(Persona persona){
        iPersonaRepositorio.save(persona);
    }
    
    public void delete(int id){
        iPersonaRepositorio.deleteById(id);
    }
    
    public boolean existsById(int id){
        return iPersonaRepositorio.existsById(id);
    }
    
    public boolean existsByNombre(String nombre){
        return iPersonaRepositorio.existsByNombre(nombre);
    }
}
