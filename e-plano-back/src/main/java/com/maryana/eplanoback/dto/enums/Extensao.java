package com.maryana.eplanoback.dto.enums;

public enum Extensao {

    OPCAO1("Planejamento e regêngia de aulas em cursos de Formação Inicial e Continuada (FIC)", 12.0, 2.0),
    OPCAO2("Autoria/coordenação de Projeto de Extensao", 1.0, 8.0),
    OPCAO3("Participação em Projeto de Extensao", 1.0, 4.0),
    OPCAO4("Orientação de Projeto de Extensao", 2.0, 2.0);

    private String descricao;
    private Double valorMax;
    private Double valorPonderacao;

    Extensao(String descricao, Double valorMax, Double valorPonderacao) {
        this.descricao = descricao;
        this.valorMax = valorMax;
        this.valorPonderacao = valorPonderacao;
    }

    public String getDescricao() {
        return descricao;
    }

    public Double getValorMax() {
        return valorMax;
    }

    public Double getValorPonderacao() {
        return valorPonderacao;
    }
}
