package com.maryana.eplanoback.dto;

import java.io.Serializable;

public class ExtensaoDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String extensao;
    private String descricao;
    private Integer cargaHOuPontuacao;

    public ExtensaoDTO() {
    }

    public ExtensaoDTO(String extensao, String descricao, Integer cargaHOuPontuacao) {
        this.extensao = extensao;
        this.descricao = descricao;
        this.cargaHOuPontuacao = cargaHOuPontuacao;
    }

    public String getExtensao() {
        return extensao;
    }

    public void setExtensao(String extensao) {
        this.extensao = extensao;
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
