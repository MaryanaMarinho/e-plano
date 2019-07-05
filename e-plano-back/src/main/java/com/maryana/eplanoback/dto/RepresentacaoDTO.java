package com.maryana.eplanoback.dto;

import java.io.Serializable;

public class RepresentacaoDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String representacao;
    private String descricao;
    private Integer cargaHOuPontuacao;

    public RepresentacaoDTO() {
    }

    public RepresentacaoDTO(String representacao, String descricao, Integer cargaHOuPontuacao) {
        this.representacao = representacao;
        this.descricao = descricao;
        this.cargaHOuPontuacao = cargaHOuPontuacao;
    }

    public String getRepresentacao() {
        return representacao;
    }

    public void setRepresentacao(String representacao) {
        this.representacao = representacao;
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
