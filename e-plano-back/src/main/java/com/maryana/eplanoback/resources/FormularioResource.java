package com.maryana.eplanoback.resources;

import com.maryana.eplanoback.domain.Formulario;
import com.maryana.eplanoback.dto.FormularioDTO;
import com.maryana.eplanoback.services.FormularioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/formularios")
public class FormularioResource {

    @Autowired
    private FormularioService service;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<FormularioDTO>> findAll() {

        List<Formulario> list = service.findAll();

        List<FormularioDTO> listDto = list.stream().map(x -> new FormularioDTO(x)).collect(Collectors.toList());

        return ResponseEntity.ok().body(listDto);
    }

    @CrossOrigin
    @RequestMapping(value = "/{id}", method = RequestMethod.GET )
    public ResponseEntity<FormularioDTO> findById(@PathVariable String id) {

        Formulario obj = service.findById(id);
        FormularioDTO formDto = service.montaDto(obj);

        return ResponseEntity.ok().body(formDto);
    }

    @CrossOrigin
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<FormularioDTO> insert(@RequestBody Formulario obj) {

        obj = service.insert(obj);
        FormularioDTO formDto = service.montaDto(obj);
//        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
//                .buildAndExpand(obj.getId()).toUri(); //localizacao do novo recurso criado

        return ResponseEntity.ok().body(formDto);
    }

    @CrossOrigin
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> delete(@PathVariable String id) {

        service.delete(id);

        return ResponseEntity.noContent().build();
    }

    @CrossOrigin
    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Void> update(@RequestBody Formulario obj, @PathVariable String id) {

        obj.setId(id);
        obj = service.update(obj);

        return ResponseEntity.noContent().build();
    }
}
