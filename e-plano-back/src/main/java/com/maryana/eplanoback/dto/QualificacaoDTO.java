package com.maryana.eplanoback.dto;

import java.io.Serializable;

public class QualificacaoDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String instituicaoEnsino;
    private String formacao;
    private String curso;

    public QualificacaoDTO() {
    }

    public QualificacaoDTO(String instituicaoEnsino, String formacao, String curso) {
        this.instituicaoEnsino = instituicaoEnsino;
        this.formacao = formacao;
        this.curso = curso;
    }

    public String getInstituicaoEnsino() {
        return instituicaoEnsino;
    }

    public void setInstituicaoEnsino(String instituicaoEnsino) {
        this.instituicaoEnsino = instituicaoEnsino;
    }

    public String getFormacao() {
        return formacao;
    }

    public void setFormacao(String formacao) {
        this.formacao = formacao;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

}
