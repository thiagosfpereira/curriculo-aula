export class Endereco {
  private _rua: string;
  private _bairro: string;
  private _cidade: string;
  private _estado: string;

  public getRua(): string {
    return this._rua;
  }
  public setRua(rua: string) {
    this._rua = rua;
  }

  public getBairro(): string {
    return this._bairro;
  }

  public setBairro(bairro: string) {
    this._bairro = bairro;
  }

  public getCidade(): string {
    return this._cidade;
  }

  public setCidade(cidade: string) {
    this._cidade = cidade;
  }

  public getEstado(): string {
    return this._estado;
  }

  public setEstado(estado: string) {
    this._estado = estado;
  }

  // constructor(rua: string, bairro: string, cidade: string, estado: string) {
  //   this.rua = rua;
  //   this.bairro = bairro;
  //   this.cidade = cidade;
  //   this.estado = estado;
  // }
}
