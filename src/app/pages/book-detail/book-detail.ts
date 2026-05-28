import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [MatButtonModule, MatExpansionModule, MatCardModule],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.scss',
})
export class BookDetailComponent {
  private location = inject(Location);

  showDetails = false;

  book = history.state.book;

  back(): void {
    this.location.back();
  }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }

  getCoverUrl(coverId: number): string {
    return `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
  }
}
