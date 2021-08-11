import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token={
  headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://olamundoprojeto.herokuapp.com/postagem', this.token)
  }
  getById(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://olamundoprojeto.herokuapp.com/postagem/${id}` , this.token)
  }
 // getByAgenda(postagem: Postagem): Observable<Postagem>{
  //  return this.http.get<Postagem>(`https://olamundoprojeto.herokuapp.com/postagem/agenda/${String}`, this.token)
// }
// getByContato(postagem: Postagem): Observable<Postagem>{
 // return this.http.get<Postagem>(`https://olamundoprojeto.herokuapp.com/postagem/contato/${String}`,  this.token)
//}
//getByTexto(postagem: Postagem): Observable<Postagem>{
 // return this.http.get<Postagem>(`https://olamundoprojeto.herokuapp.com/postagem/texto/${String}`,  this.token)
//}
//getByTitulo(postagem: Postagem): Observable<Postagem>{
 // return this.http.get<Postagem>(`https://olamundoprojeto.herokuapp.com/postagem/titulo/${String}`,  this.token)
//}
  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://olamundoprojeto.herokuapp.com/postagem', postagem ,this.token)
  }
  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://olamundoprojeto.herokuapp.com/postagem', postagem ,this.token)
  }

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://olamundoprojeto.herokuapp.com/postagem/${id}`)
  }
  deletePostagem(id: number){
    return this.http.delete(`https://olamundoprojeto.herokuapp.com/postagem/${id}`, this.token)
  }


}
