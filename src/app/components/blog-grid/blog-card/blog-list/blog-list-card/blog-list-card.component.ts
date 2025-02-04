import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-blog-list-card',
  imports: [MatCardModule],
  templateUrl: './blog-list-card.component.html',
  styleUrl: './blog-list-card.component.scss',
})
export class BlogListCardComponent {
  @Input({ required: true }) categoryId: string = '';
  @Input({ required: true }) blogTitle: string = '';
  @Input({ required: true }) blogSubtitle: string = '';
  @Input({ required: true }) blogImg: string = '';
  @Input({ required: true }) blogDescription: string = '';
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
}
