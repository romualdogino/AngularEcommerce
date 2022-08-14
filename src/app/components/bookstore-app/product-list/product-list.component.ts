import { Component, OnInit } from '@angular/core';
import { Book } from './model/Book';
import { BookService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 livros =[{
    id: "1",
    name: "livro 1",
    category: "cat1",
    price: 100,
    img: "",
    quantity: 10
  },
  {
    id: "2",
    name: "livro 2",
    category: "cat1",
    price: 100,
    img: "",
    quantity: 10
  },
  {
    id: "3",
    name: "livro 3",
    category: "cat1",
    price: 100,
    img: "",
    quantity: 10
  }
  ,
  {
    id: "4",
    name: "livro 4",
    category: "cat1",
    price: 100,
    img: "",
    quantity: 10
  }
]
  // bookService: BookService;

  // constructor(bookService: BookService) {
  //   // this.bookService = bookService

  // }

  ngOnInit(): void {
    // this.livros = this.bookService.getBook().subscribe(data =>{
    //   this.livros = data;
    //   console.log({lista: this.livros})
    // })
    this.livros
    

  }

}
