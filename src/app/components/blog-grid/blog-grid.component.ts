import { Component } from '@angular/core';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-grid',
  imports: [BlogCardComponent, NgFor, RouterLink],
  templateUrl: './blog-grid.component.html',
  styleUrl: './blog-grid.component.scss',
})
export class BlogGridComponent {
  blogs = [
    {
      id: '1',
      logoIcon: 'desktop_mac',
      title: 'Technological devices',
      description:
        'The Chihuahua is a Mexican breed of toy dog. It is named for the Mexican state of Chihuahua and is among the smallest of all dog breeds. It is usually kept as a companion animal or for showing.',
    },
    {
      id: '2',
      logoIcon: 'book',
      title: 'Books I have read',
      description:
        'The Chihuahua is a Mexican breed of toy dog. It is named for the Mexican state of Chihuahua and is among the smallest of all dog breeds. It is usually kept as a companion animal or for showing.',
    },
    {
      id: '3',
      logoIcon: ' border_color',
      title: 'Journals',
      description:
        'The Chihuahua is a Mexican breed of toy dog. It is named for the Mexican state of Chihuahua and is among the smallest of all dog breeds. It is usually kept as a companion animal or for showing.',
    },
  ];
}
