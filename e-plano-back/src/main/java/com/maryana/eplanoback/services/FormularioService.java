package com.maryana.eplanoback.services;

import com.maryana.eplanoback.domain.Formulario;
import com.maryana.eplanoback.dto.FormularioDTO;
import com.maryana.eplanoback.repository.FormularioRepository;
import com.maryana.eplanoback.services.exception.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FormularioService {

    @Autowired
    private FormularioRepository repository;

    public List<Formulario> findAll() {

        return repository.findAll();
    }

    public Formulario findById(String id) {

        Optional<Formulario> obj = repository.findById(id);

        return obj.orElseThrow(() -> new ObjectNotFoundException("Objeto não encontrado"));
    }

    public Formulario insert(Formulario obj) {
        return repository.insert(obj);
    }

    public void delete(String id) {
        findById(id);
        repository.deleteById(id);
    }

    public Formulario update(Formulario obj) {

        Formulario newObj = findById(obj.getId());
        updateData(newObj, obj);

        return repository.save(newObj);
    }

    private void updateData(Formulario newObj, Formulario obj) {

        newObj.setIdentificacao(obj.getIdentificacao());
        newObj.setQualificacao(obj.getQualificacao());
        newObj.setEnsino(obj.getEnsino());
        newObj.setPesquisa(obj.getPesquisa());
        newObj.setExtensao(obj.getExtensao());
        newObj.setProducaoAcademica(obj.getProducaoAcademica());
        newObj.setRepresentacao(obj.getRepresentacao());
        newObj.setAtvQualificacao(obj.getAtvQualificacao());
    }

    public FormularioDTO montaDto(Formulario form) {
        return new FormularioDTO(form);
    }

}
