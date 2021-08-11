import { Tema } from "./Tema"
import { User } from "./User"


export class Postagem {


  public id: number
  public id_usuario: number
  public tipoPostagem: number
  public titulo: String
  public texto: String
  public agenda: String
  public contato: String
  public tema: Tema
  public usuario: User
  public data: Date



}
