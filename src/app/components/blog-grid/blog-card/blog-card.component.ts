import { Component, Input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-blog-card',
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule, MatIconModule],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss',
})
export class BlogCardComponent {
  @Input({ required: true }) id: String = '';
  @Input({ required: true }) logoIcon: String = '';
  @Input({ required: true }) title: String = '';
  @Input({ required: true }) description: String = '';
  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;
}
