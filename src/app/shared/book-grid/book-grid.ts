import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-grid',
  standalone: true,
  imports: [],
  templateUrl: './book-grid.html',
  styleUrl: './book-grid.scss',
})
export class BookGridComponent {
  @Input() books: Book[] = [];
  @Output() selectedBook = new EventEmitter<Book>();

  selectBook(book: Book): void {
    this.selectedBook.emit(book);
  }
}
