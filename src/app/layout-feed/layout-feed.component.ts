import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-layout-feed',
  templateUrl: './layout-feed.component.html',
  styleUrls: ['./layout-feed.component.css']
})
export class LayoutFeedComponent implements OnInit {


  nome = environment.nome
  foto = environment.foto
  id = environment.id
  postagem: Postagem= new Postagem()
  listaPostagem: Postagem[]


  listaTemas: Tema[]
  idTema: number
  tema: Tema = new Tema()

  user: User = new User()
  idUser = environment.id

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService,

  ) { }

  // ngOnInit() {

  //   if(environment.token == ''){
  //     alert('Sua sessão expirou, faça login novamente')
  //     this.router.navigate(['/entrar'])
  //   }

  //   this.getAllTemas()
  //   this.getAllPostagens()
  // }


  // getAllTemas(){
  //   this.temaService.getAllTema().subscribe((resp: Tema[])=>{
  //     this.listaTemas = resp

  //   })
  // }

  // getAllPostagens(){
  //   this.postagemService.getAllPostagens().subscribe((resp: Postagem[])=>{
  //     this.listaPostagem = resp
  //   })
  // }

  // findByIdTema(){
  //   this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
  //     this.tema = resp
  //   })
  // }
  // findByIdUsuario(){
  //   this.authService.getByIdUsuario(this.idUser).subscribe((resp: User)=>{
  //     this.user = resp
  //   })
  // }



  // publicar(){
  //   this.tema.id = this.idTema
  //   this.postagem.tema = this.tema

  //   this.user.id = this.idUser
  //   this.postagem.usuario = this.user
  //   this.postagem.tipoPostagem = 5

  //   console.log(this.postagem)
  //   this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>{
  //     this.postagem =  resp
  //     alert('Postagem realizada com sucesso!')
  //     this.postagem = new Postagem()
  //     this.getAllPostagens()
  //   })

  // }

  ngOnInit() {

    window.scroll(0,0)


    if(environment.token == ""){
      //alert("Sua sessão expirou! Faça login novamente!")
      this.router.navigate(["/entrar"])

    }

    this.getAllTemas()
    this.getAllPostagens()
  }

  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) =>{
      this.tema = resp
    })
  }

  getAllPostagens () {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagem = resp
    })
  }

  findByIdUsuario () {
    this.authService.getByIdUsuario(this.idUser).subscribe((resp: User) => {
      this.user = resp
    })
  }

  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.user.id = this.idUser
    this.postagem.usuario = this.user

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem publicada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
    })
  }


}
