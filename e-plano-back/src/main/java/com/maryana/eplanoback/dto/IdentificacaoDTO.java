package com.maryana.eplanoback.dto;


import java.io.Serializable;

public class IdentificacaoDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String nome;
    private Integer matricula;
    private String anoSemestre;
    private String regimeTrabalho;
    private String categoriaFuncional;
    private String email;

    public IdentificacaoDTO() {
        categoriaFuncional = "DOCENTE EBTT";
    }

    public IdentificacaoDTO(String nome, Integer matricula, String anoSemestre, String regimeTrabalho, String email) {
        this.nome = nome;
        this.matricula = matricula;
        this.anoSemestre = anoSemestre;
        this.regimeTrabalho = regimeTrabalho;
        this.email = email;
        categoriaFuncional = "DOCENTE EBTT";
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getMatricula() {
        return matricula;
    }

    public void setMatricula(Integer matricula) {
        this.matricula = matricula;
    }

    public String getAnoSemestre() {
        return anoSemestre;
    }

    public void setAnoSemestre(String anoSemestre) {
        this.anoSemestre = anoSemestre;
    }

    public String getCategoriaFuncional() {
        return categoriaFuncional;
    }

    public String getRegimeTrabalho() {
        return regimeTrabalho;
    }

    public void setRegimeTrabalho(String regimeTrabalho) {
        this.regimeTrabalho = regimeTrabalho;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
