import { Component, OnInit } from '@angular/core';
import { Book } from '../../bookstore-app/product-list/model/Book';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {
  livros: Book = {
    id: "1",
    name: "livro1",
    category: "cat1",
    price: 100,
    img: "",
    quantity: 10

  }

  constructor() {

  }

  ngOnInit(): void {
    this.livros
  }

}
