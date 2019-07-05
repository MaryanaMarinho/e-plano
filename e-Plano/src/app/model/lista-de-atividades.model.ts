import { AtividadeDeEnsino } from './atividade-de-ensino.model';
import { AtividadeDeExtensao } from './atividade-de-extensao.model';
import { AtividadeDePesquisa } from './atividade-de-pesquisa.model';
import { AtividadeDeProducao } from './atividade-de-producao.model';
import { AtividadeDeRepresentacao } from './atividade-de-representacao.model';
import { AtividadeDeAtvQualificacao } from './atividade-de-atv-qualificacao.model';

export class ListaDeAtividades {

  constructor() {
  }


  public getListaAtividadeEnsino(): Array<AtividadeDeEnsino> {

    const objAtividadesDeEnsinos = [
      new AtividadeDeEnsino(
        'Planejamento e regência de aulas',
        20,
        1.75
      ),
      new AtividadeDeEnsino(
        'Número de turmas',
        10.0,
        0.5
      ),
      new AtividadeDeEnsino(
        'Número de disciplinas',
        5.0,
        0.5
      ),
      new AtividadeDeEnsino(
        'Autoria/coordenação de Projeto de Ensino',
        1.0,
        8.0
      ),
      new AtividadeDeEnsino(
        'Participação em Projeto de Ensino',
        1.0,
        4.0
      ),
      new AtividadeDeEnsino(
        'Atendimento ao discente/pais ou responsável de aluno',
        4.0,
        1.0
      ),
      new AtividadeDeEnsino(
        'Supervisão de estágio curricular',
        2.0,
        2.0
      ),
      new AtividadeDeEnsino(
        'Orientação de Trabalho de Conclusão(TCC)',
        4.0,
        2.0
      ),
      new AtividadeDeEnsino(
        'Orientação de monografia de especialização',
        4.0,
        2.0
      ),
      new AtividadeDeEnsino(
        'Orientação de dissertação de mestrado',
        2.0,
        4.0
      ),
      new AtividadeDeEnsino(
        'Co-orientação de dissertação de mestrado',
        1.0,
        2.0
      ),
      new AtividadeDeEnsino(
        'Orientação de tese de doutorado',
        2.0,
        6.0
      ),
      new AtividadeDeEnsino(
        'Co-orientação de tese de doutorado',
        1.0,
        3.0
      ),
      new AtividadeDeEnsino(
        'Participação em comissões de elaboração/revisão/avaliação de projetos de curso e regulamentos acadêmicos',
        2.0,
        3.0
      ),
      new AtividadeDeEnsino(
        'Participação em comissões de elaboração de projetos de modernização, instalação e supervisão de laboratórios',
        2.0,
        3.0
      ),
      new AtividadeDeEnsino(
        'Participação em reuniões convocadas pela Coordenação, Departamento, Direção-Geral do campus ou Reitoria',
        4.0,
        1.0
      )
    ]
    return objAtividadesDeEnsinos;
  }

  public getListaAtividadeExtensao(): Array<AtividadeDeExtensao> {

    const objAtividadesDeExtensao = [
      new AtividadeDeExtensao(
        'Planejamento e regêngia de aulas em cursos de Formação Inicial e Continuada (FIC)',
        12.0,
        2.0
      ),
      new AtividadeDeExtensao(
        'Autoria/coordenação de Projeto de Extensao',
        1.0,
        8.0
      ),
      new AtividadeDeExtensao(
        'Participação em Projeto de Extensao',
        1.0,
        4.0
      ),
      new AtividadeDeExtensao(
        'Orientação de Projeto de Extensao',
        2.0,
        2.0
      )
    ]
    return objAtividadesDeExtensao;
  }

  public getListaAtividadePesquisa(): Array<AtividadeDePesquisa> {

    const objAtividadesDePesquisa = [
      new AtividadeDePesquisa(
        'Orientação de Projeto de Iniciação Cientifica e Tecnológica',
        2.0,
        3.0
      ),
      new AtividadeDePesquisa(
        'Autoria/coordenação de Projeto de Pesquisa',
        1.0,
        8.0
      ),
      new AtividadeDePesquisa(
        'Participação em Projeto de Pesquisa',
        1.0,
        4.0
      ),
      new AtividadeDePesquisa(
        'Coordenação de Núcleo de Pesquisa cadastrado no Diretório de Grupos de Pesquisa do CNPq e certificado pelo IFG',
        1.0,
        2.0
      ),
      new AtividadeDePesquisa(
        'Participação em Núcleo de Pesquisa cadastrado no Diretório de Grupos de Pesquisa do CNPq e certificado pelo IFG',
        2.0,
        1.0
      )
    ]
    return objAtividadesDePesquisa;
  }

  public getListaAtividadeProducao(): Array<AtividadeDeProducao> {

    const objAtividadesDeProducao = [
      new AtividadeDeProducao(
        'Autoria de livro',
        1.0,
        8.0
      ),
      new AtividadeDeProducao(
        'Autoria de capítulo de livro',
        1.0,
        2.0
      ),
      new AtividadeDeProducao(
        'Publicação de artigo em periódicos Qualis A ou B',
        2.0,
        2.0
      ),
      new AtividadeDeProducao(
        'Apresentação de trabalho, palestra e mesa-redonda',
        1.0,
        2.0
      ),
      new AtividadeDeProducao(
        'Obra, curadoria e mostra',
        1.0,
        2.0
      )
    ]
    return objAtividadesDeProducao;
  }

  public getListaAtividadeRepresentacao(): Array<AtividadeDeRepresentacao> {

    const objAtividadesDeRepresentacao = [
      new AtividadeDeRepresentacao(
        'Coordenação ou presidência de comissão ou outro fórum permante, constituído por Portaria, com exceção aqueles inerentes ao exercício do cargo de chefia',
        1.0,
        4.0
      ),
      new AtividadeDeRepresentacao(
        'Participação em conselho, comissão ou outro fórum ou instância de representação da Instituição nomeado por Portaria',
        2.0,
        2.0
      ),
      new AtividadeDeRepresentacao(
        'Participação em instâncias externas indicado pela Instituição, por meio de Portaria',
        1.0,
        2.0
      ),
      new AtividadeDeRepresentacao(
        'Participação em comissão organizadora de eventos institucionais, nomeado por Portaria',
        1.0,
        2.0
      ),
      new AtividadeDeRepresentacao(
        'Organização de eventos e outras atividades definidas pelo Conselho Departamental, Direção-Geral do campus ou Reitoria',
        2.0,
        2.0
      )
    ]
    return objAtividadesDeRepresentacao;
  }

  public getListaAtividadeAtvQualificacao(): Array<AtividadeDeAtvQualificacao> {

    const objAtividadesDeAtvQualificacao = [
      new AtividadeDeAtvQualificacao(
        'Matrícula em curso de Especialização',
        1.0,
        4.0
      ),
      new AtividadeDeAtvQualificacao(
        'Matrícula em Programa de Mestrado',
        1.0,
        4.0
      ),
      new AtividadeDeAtvQualificacao(
        'Matrícula em Programa de Doutorado',
        1.0,
        4.0
      )
    ]
    return objAtividadesDeAtvQualificacao;
  }

}