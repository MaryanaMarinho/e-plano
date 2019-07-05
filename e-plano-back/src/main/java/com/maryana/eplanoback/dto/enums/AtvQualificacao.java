package com.maryana.eplanoback.dto.enums;

public enum AtvQualificacao {

    ESPECIALIZACAO_CURSANDO("Matrícula em curso de Especialização"),
    MESTRADO_CURSNDO("Matrícula em Programa de Mestrado"),
    DOUTORADO_CURSANDO("Matrícula em Programa de Doutorado");

    private String valor;

    AtvQualificacao(String valor) {
        this.valor = valor;
    }

    public String getValor() {
        return valor;
    }

}
