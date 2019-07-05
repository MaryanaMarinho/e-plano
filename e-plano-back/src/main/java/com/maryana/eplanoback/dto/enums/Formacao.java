package com.maryana.eplanoback.dto.enums;

public enum Formacao {

    GRADUACAO("Graduação"),
    ESPECIALIZACAO("Especialização"),
    MESTRADO("Mestrado"),
    DOUTORADO("Doutorado");

    private String valor;

    Formacao(String valor) {
        this.valor = valor;
    }

    public String getValor() {
        return valor;
    }

}
