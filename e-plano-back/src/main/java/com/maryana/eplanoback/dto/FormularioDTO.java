package com.maryana.eplanoback.dto;

import com.maryana.eplanoback.domain.Formulario;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class FormularioDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String id;

    private List<IdentificacaoDTO> identificacao = new ArrayList<>();
    private List<QualificacaoDTO> qualificacao = new ArrayList<>();
    private List<EnsinoDTO> ensino = new ArrayList<>();
    private List<PesquisaDTO> pesquisa = new ArrayList<>();
    private List<ExtensaoDTO> extensao = new ArrayList<>();
    private List<ProducaoAcademicaDTO> producaoAcademica = new ArrayList<>();
    private List<AtvQualificacaoDTO> atvQualificacao = new ArrayList<>();
    private List<RepresentacaoDTO> representacao = new ArrayList<>();

    public FormularioDTO() {
    }

    public FormularioDTO(Formulario obj) {
        this.id = obj.getId();
        this.identificacao = obj.getIdentificacao();
        this.qualificacao = obj.getQualificacao();
        this.ensino = obj.getEnsino();
        this.pesquisa = obj.getPesquisa();
        this.extensao = obj.getExtensao();
        this.producaoAcademica = obj.getProducaoAcademica();
        this.representacao = obj.getRepresentacao();
        this.atvQualificacao = obj.getAtvQualificacao();
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
}
