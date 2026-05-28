import { Component, OnInit, inject } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book';

import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { BookCardComponent } from '../../shared/book-card/book-card';
import { BookGridComponent } from '../../shared/book-grid/book-grid';
@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    BookCardComponent,
    BookGridComponent,
  ],
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(12px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class BookListComponent implements OnInit {
  private bookService = inject(BookService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  books: Book[] = [];
  loading = true;
  error = '';

  viewMode: 'cards' | 'table' = 'cards';

  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: (books) => {
        this.books = books;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.error = 'No se han podido cargar los libros.';
        this.loading = false;
        this.cdr.detectChanges();
      },
    });
  }

  changeView(mode: 'cards' | 'table'): void {
    this.viewMode = mode;
  }

  getCoverUrl(coverId: number): string {
    return `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
  }
  goToDetail(book: Book): void {
    const bookId = book.key.replace('/works/', '');
    this.router.navigate(['/book', bookId], {
      state: { book },
    });
  }
}
