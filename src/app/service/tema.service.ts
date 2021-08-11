import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }


  getAllTema(): Observable<Tema[]> {
    return this.http.get<Tema[]>('https://olamundobackend.herokuapp.com/tema')
  }

  getByIdTema(id: number): Observable<Tema> {
    return this.http.get<Tema>(`https://olamundobackend.herokuapp.com/tema/${id}`)
  }

  getByTemaPostagem(tema: Tema): Observable<Tema> {
    return this.http.get<Tema>(`https://olamundobackend.herokuapp.com/tema/temapostagem/${String}`)
  }

  getByAmbientacao(tema: Tema): Observable<Tema> {
    return this.http.get<Tema>(`https://olamundobackend.herokuapp.com/tema/ambientacao/${String}`)
  }

  getByPalavraChave(tema: Tema): Observable<Tema> {
    return this.http.get<Tema>(`https://olamundobackend.herokuapp.com/tema/tema/palavrachave/${String}`)
  }

  postTema(tema: Tema): Observable<Tema> {
    return this.http.post<Tema>('https://olamundobackend.herokuapp.com/tema', tema)
  }

  putTema(tema: Tema): Observable<Tema> {
    return this.http.put<Tema>('https://olamundobackend.herokuapp.com/tema', tema)
  }

  deleteTema(id: number) {
    return this.http.delete(`https://olamundobackend.herokuapp.com/tema/${id}`)
  }
}
