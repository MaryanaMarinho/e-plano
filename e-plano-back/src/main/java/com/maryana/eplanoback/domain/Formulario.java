package com.maryana.eplanoback.domain;

import com.maryana.eplanoback.dto.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Document
public class Formulario implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    private List<IdentificacaoDTO> identificacao = new ArrayList<>();
    private List<QualificacaoDTO> qualificacao = new ArrayList<>();
    private List<EnsinoDTO> ensino = new ArrayList<>();
    private List<PesquisaDTO> pesquisa = new ArrayList<>();
    private List<ExtensaoDTO> extensao = new ArrayList<>();
    private List<ProducaoAcademicaDTO> producaoAcademica = new ArrayList<>();
    private List<AtvQualificacaoDTO> atvQualificacao = new ArrayList<>();
    private List<RepresentacaoDTO> representacao = new ArrayList<>();


    public Formulario() {
    }

    public Formulario(String id) {
        this.id = id;
    }

    public String getId() {

        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public List<IdentificacaoDTO> getIdentificacao() {
        return identificacao;
    }

    public void setIdentificacao(List<IdentificacaoDTO> identificacao) {
        this.identificacao = identificacao;
    }

    public List<QualificacaoDTO> getQualificacao() {
        return qualificacao;
    }

    public void setQualificacao(List<QualificacaoDTO> qualificacao) {
        this.qualificacao = qualificacao;
    }

    public List<EnsinoDTO> getEnsino() {
        return ensino;
    }

    public void setEnsino(List<EnsinoDTO> ensino) {
        this.ensino = ensino;
    }

    public List<PesquisaDTO> getPesquisa() {
        return pesquisa;
    }

    public void setPesquisa(List<PesquisaDTO> pesquisa) {
        this.pesquisa = pesquisa;
    }

    public List<ExtensaoDTO> getExtensao() {
        return extensao;
    }

    public void setExtensao(List<ExtensaoDTO> extensao) {
        this.extensao = extensao;
    }

    public List<ProducaoAcademicaDTO> getProducaoAcademica() {
        return producaoAcademica;
    }

    public void setProducaoAcademica(List<ProducaoAcademicaDTO> producaoAcademica) {
        this.producaoAcademica = producaoAcademica;
    }

    public List<AtvQualificacaoDTO> getAtvQualificacao() {
        return atvQualificacao;
    }

    public void setAtvQualificacao(List<AtvQualificacaoDTO> atvQualificacao) {
        this.atvQualificacao = atvQualificacao;
    }

    public List<RepresentacaoDTO> getRepresentacao() {
        return representacao;
    }

    public void setRepresentacao(List<RepresentacaoDTO> representacao) {
        this.representacao = representacao;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Formulario that = (Formulario) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id);
    }
}
