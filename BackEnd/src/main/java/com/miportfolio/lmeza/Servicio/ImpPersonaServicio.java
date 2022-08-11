package com.miportfolio.lmeza.Servicio;

import com.miportfolio.lmeza.Entidad.Persona;
import com.miportfolio.lmeza.Interfaz.IPersonaServicio;
import com.miportfolio.lmeza.Repositorio.IPersonaRepositorio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Leandro
 */
@Service
public class ImpPersonaServicio implements IPersonaServicio {
    @Autowired IPersonaRepositorio iPersonaRepositorio;

    @Override
    public List<Persona> getPersona() {
        List<Persona> persona = iPersonaRepositorio.findAll();
        return persona;
    }

    @Override
    public void savePersona(Persona persona) {
        iPersonaRepositorio.save(persona);
    }

    @Override
    public void deletePersona(Long id) {
        iPersonaRepositorio.deleteById(id);
    }

    @Override
    public Persona findPersona(Long id) {
        Persona persona = iPersonaRepositorio.findById(id).orElse(null);
        return persona;
    }
    
}
