import { Tema } from "./Tema"
import { User } from "./User"


export class Postagem {
  public id: number;
  public titulo: String;
  public texto: String;
  public curtir: number;
  public descurtir: number;
  public agenda: String;
  public contato: String;
  public tema: Tema;
  public usuario: User;
  public data: Date;

}
