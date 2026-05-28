import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private http = inject(HttpClient);

  private apiUrl =
    'https://openlibrary.org/search.json?subject=fantasy&limit=20&fields=key,title,author_name,first_publish_year,cover_i,publisher,language,subject';

  getBooks(): Observable<Book[]> {
    return this.http.get<any>(this.apiUrl).pipe(map((response) => response.docs || []));
  }
}
