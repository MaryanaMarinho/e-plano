package com.maryana.eplanoback.dto;

import java.io.Serializable;

public class PesquisaDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String pesquisa;
    private String descricao;
    private Integer cargaHOuPontuacao;

    public PesquisaDTO() {
    }

    public PesquisaDTO(String pesquisa, String descricao, Integer cargaHOuPontuacao) {
        this.pesquisa = pesquisa;
        this.descricao = descricao;
        this.cargaHOuPontuacao = cargaHOuPontuacao;
    }

    public String getPesquisa() {
        return pesquisa;
    }

    public void setPesquisa(String pesquisa) {
        this.pesquisa = pesquisa;
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
