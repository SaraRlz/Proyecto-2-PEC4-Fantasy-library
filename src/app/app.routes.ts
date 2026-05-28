import { Routes } from '@angular/router';

import { BookDetailComponent } from './pages/book-detail/book-detail';
import { BookListComponent } from './pages/book-list/book-list';

export const routes: Routes = [
  {
    path: '',
    component: BookListComponent,
  },
  {
    path: 'book/:id',
    component: BookDetailComponent,
  },
];
