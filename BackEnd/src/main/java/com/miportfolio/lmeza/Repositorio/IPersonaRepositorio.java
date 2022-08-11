package com.miportfolio.lmeza.Repositorio;

import com.miportfolio.lmeza.Entidad.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Leandro
 */
@Repository
public interface IPersonaRepositorio extends JpaRepository<Persona,Long> {
    
}
