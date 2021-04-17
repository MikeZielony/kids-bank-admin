import { IAuthMailResultDto } from "./AuthMailResult.dto";

export class AuthMailModel {
  public id: number;
  public name: string;
  public mail: string;


  constructor(input: AuthMailModel) {
    this.id = input.id;
    this.name = input.name;
    this.mail = input.mail;
  }
}
