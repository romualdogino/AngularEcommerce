import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrosComponent } from './components/api/livros/livros.component';
import { BookstoreAppComponent } from './components/bookstore-app/bookstore-app.component';

const routes: Routes = [
  { 
    path: '', component: BookstoreAppComponent 
  },
  { 
    path: 'livros', component: LivrosComponent 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
