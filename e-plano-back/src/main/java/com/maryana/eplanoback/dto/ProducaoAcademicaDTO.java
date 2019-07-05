package com.maryana.eplanoback.dto;

import java.io.Serializable;

public class ProducaoAcademicaDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String producaoAcademica;
    private String descricao;
    private Integer cargaHOuPontuacao;

    public ProducaoAcademicaDTO() {
    }

    public ProducaoAcademicaDTO(String producaoAcademica, String descricao, Integer cargaHOuPontuacao) {
        this.producaoAcademica = producaoAcademica;
        this.descricao = descricao;
        this.cargaHOuPontuacao = cargaHOuPontuacao;
    }

    public String getProducaoAcademica() {
        return producaoAcademica;
    }

    public void setProducaoAcademica(String producaoAcademica) {
        this.producaoAcademica = producaoAcademica;
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
