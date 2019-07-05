package com.maryana.eplanoback.dto.enums;

public enum Ensino {

    OPCAO1("Planejamento e regência de aulas", 20.0, 1.75),
    OPCAO2("Número de turmas", 10.0, 0.5),
    OPCAO3("Número de disciplinas", 5.0, 0.5),
    OPCAO4("Autoria/coordenação de Projeto de Ensino", 1.0, 8.0),
    OPCAO5("Participação em Projeto de Ensino", 1.0, 4.0),
    OPCAO6("Atendimento ao discente/pais ou responsável de aluno", 4.0, 1.0),
    OPCAO7("Supervisão de estágio curricular", 2.0, 2.0),
    OPCAO8("Orientação de Trabalho de Conclusão(TCC)", 4.0, 2.0),
    OPCAO9("Orientação de monografia de especialização", 4.0, 2.0),
    OPCAO10("Orientação de dissertação de mestrado", 2.0, 4.0),
    OPCAO11("Co-orientação de dissertação de mestrado", 1.0, 2.0),
    OPCAO12("Orientação de tese de doutorado", 2.0, 6.0),
    OPCAO13("Co-orientação de tese de doutorado", 1.0, 3.0),
    OPCAO14("Participação em comissões de elaboração/revisão/avaliação de projetos de curso e regulamentos acadêmicos", 2.0, 3.0),
    OPCAO15("Participação em comissões de elaboração de projetos de modernização, instalação e supervisão de laboratórios", 2.0, 3.0),
    OPCAO16("Participação em reuniões convocadas pela Coordenação, Departamento, Direção-Geral do campus ou Reitoria", 4.0, 1.0);

    private String descricao;
    private Double valorMax;
    private Double valorPonderacao;

    Ensino(String descricao, Double valorMax, Double valorPonderacao) {
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
