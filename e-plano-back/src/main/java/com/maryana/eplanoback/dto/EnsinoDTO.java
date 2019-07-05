package com.maryana.eplanoback.dto;

import java.io.Serializable;

public class EnsinoDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String ensino;
    private String descricao;
    private Integer cargaHOuPontuacao;

    public EnsinoDTO() {
    }

    public EnsinoDTO(String ensino, String descricao, Integer cargaHOuPontuacao) {
        this.ensino = ensino;
        this.descricao = descricao;
        this.cargaHOuPontuacao = cargaHOuPontuacao;
    }

    public String getEnsino() {
        return ensino;
    }

    public void setEnsino(String ensino) {
        this.ensino = ensino;
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
