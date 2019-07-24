export class EnsinoDto {

  public mapEnsino: Map<string,number> = new Map();

  constructor(
    public ensino: string,
    public descricao: string,
    public cargaHOuPontuacao: number
  ) {}
}
