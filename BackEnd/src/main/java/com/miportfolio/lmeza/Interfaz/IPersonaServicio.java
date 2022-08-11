package com.miportfolio.lmeza.Interfaz;

import com.miportfolio.lmeza.Entidad.Persona;
import java.util.List;

/**
 *
 * @author Leandro
 */
public interface IPersonaServicio {
    public List <Persona> getPersona();
    public void savePersona(Persona persona);
    public void deletePersona (Long id);
    public Persona findPersona(Long id);
}
