package com.maryana.eplanoback.dto.enums;

public enum Representacao {

    OPCAO1("Coordenação ou presidência de comissão ou outro fórum permante, constituído por Portaria, com exceção aqueles inerentes ao exercício do cargo de chefia", 1.0, 4.0),
    OPCAO2("Participação em conselho, comissão ou outro fórum ou instância de representação da Instituição nomeado por Portaria", 2.0, 2.0),
    OPCAO3("Participação em instâncias externas indicado pela Instituição, por meio de Portaria", 1.0, 2.0),
    OPCAO4("Participação em comissão organizadora de eventos institucionais, nomeado por Portaria", 1.0, 2.0),
    OPCAO5("Organização de eventos e outras atividades definidas pelo Conselho Departamental, Direção-Geral do campus ou Reitoria", 2.0, 2.0);

    private String descricao;
    private Double valorMax;
    private Double valorPonderacao;

    Representacao(String descricao, Double valorMax, Double valorPonderacao) {
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
