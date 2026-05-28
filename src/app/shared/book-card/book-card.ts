import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../models/book';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss',
})
export class BookCardComponent {
  @Input() book!: Book;
  @Output() selectedBook = new EventEmitter<Book>();

  selectBook(): void {
    this.selectedBook.emit(this.book);
  }

  getCoverUrl(coverId: number): string {
    return `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
  }
}
