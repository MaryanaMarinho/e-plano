package com.maryana.eplanoback.dto.enums;

public enum ProducaoAcademica {

    OPCAO1("Autoria de livro", 1.0, 8.0),
    OPCAO2("Autoria de capítulo de livro", 1.0, 2.0),
    OPCAO3("Publicação de artigo em periódicos Qualis A ou B", 2.0, 2.0),
    OPCAO4("Apresentação de trabalho, palestra e mesa-redonda", 1.0, 2.0),
    OPCAO5("Obra, curadoria e mostra", 1.0, 2.0);

    private String descricao;
    private Double valorMax;
    private Double valorPonderacao;

    ProducaoAcademica(String descricao, Double valorMax, Double valorPonderacao) {
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
