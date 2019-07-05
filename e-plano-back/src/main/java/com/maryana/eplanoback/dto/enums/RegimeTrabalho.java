package com.maryana.eplanoback.dto.enums;


public enum RegimeTrabalho {

    TEMPO_PARCIAL("20H"),
    TEMPO_INTEGRAL("40H"),
    DEDICACAO_EXCLUSIVA("40H D.E.");

    private String valor;

    RegimeTrabalho(String valor) {
        this.valor = valor;
    }

    public String getValor() {
        return valor;
    }

}
