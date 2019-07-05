package com.maryana.eplanoback.dto.enums;

public enum Pesquisa {

    OPCAO1("Orientação de Projeto de Iniciação Cientifica e Tecnológica", 2.0, 3.0),
    OPCAO2("Autoria/coordenação de Projeto de Pesquisa", 1.0, 8.0),
    OPCAO3("Participação em Projeto de Pesquisa", 1.0, 4.0),
    OPCAO4("Coordenação de Núcleo de Pesquisa cadastrado no Diretório de Grupos de Pesquisa do CNPq e certificado pelo IFG", 1.0, 2.0),
    OPCAO5("Participação em Núcleo de Pesquisa cadastrado no Diretório de Grupos de Pesquisa do CNPq e certificado pelo IFG", 2.0, 1.0);

    private String descricao;
    private Double valorMax;
    private Double valorPonderacao;

    Pesquisa(String descricao, Double valorMax, Double valorPonderacao) {
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
