export class IdentificacaoDto {

  constructor(
    public nome: string,
    public matricula: number,
    public anoSemestre: string,
    public regimeTrabalho: string,
    public categoriaFuncional: string,
    public email: string
  ) {}
}
