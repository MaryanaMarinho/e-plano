package com.maryana.eplanoback.dto;

import java.io.Serializable;

public class AtvQualificacaoDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String atvQualificacao;
    private String descricao;
    private Integer cargaHOuPontuacao;
    public AtvQualificacaoDTO() {
    }

    public AtvQualificacaoDTO(String atvQualificacao, String descricao, Integer cargaHOuPontuacao) {
        this.atvQualificacao = atvQualificacao;
        this.descricao = descricao;
        this.cargaHOuPontuacao = cargaHOuPontuacao;
    }

    public String getAtvQualificacao() {
        return atvQualificacao;
    }

    public void setAtvQualificacao(String atvQualificacao) {
        this.atvQualificacao = atvQualificacao;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Integer getCargaHOuPontuacao() {
        return cargaHOuPontuacao;
    }

    public void setCargaHOuPontuacao(Integer cargaHOuPontuacao) {
        this.cargaHOuPontuacao = cargaHOuPontuacao;
    }
}