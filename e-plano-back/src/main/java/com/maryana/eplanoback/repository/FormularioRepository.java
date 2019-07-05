package com.maryana.eplanoback.repository;

import com.maryana.eplanoback.domain.Formulario;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormularioRepository extends MongoRepository<Formulario, String> {
}
