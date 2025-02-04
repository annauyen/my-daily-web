import { Component, OnInit } from '@angular/core';
import { BlogListCardComponent } from './blog-list-card/blog-list-card.component';
import { NgFor } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  imports: [BlogListCardComponent, NgFor, RouterLink],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
})
export class BlogListComponent implements OnInit {
  blogList: {
    categoryId: string;
    blogImg: string;
    blogTitle: string;
    blogSubtitle: string;
    blogDescription: string;
  }[] = [
    {
      categoryId: '1',
      blogImg: '',
      blogTitle: '1 sdcsdfeswf edewd',
      blogSubtitle: '',
      blogDescription: '',
    },
    {
      categoryId: '1',
      blogImg: '',
      blogTitle: '1 edwds dwds',
      blogSubtitle: '',
      blogDescription: '',
    },
    {
      categoryId: '1',
      blogImg: '',
      blogTitle: '1',
      blogSubtitle: '',
      blogDescription: '',
    },
    {
      categoryId: '2',
      blogImg: '',
      blogTitle: '2',
      blogSubtitle: '',
      blogDescription: '',
    },
    {
      categoryId: '2',
      blogImg: '',
      blogTitle: '2',
      blogSubtitle: '',
      blogDescription: '',
    },
    {
      categoryId: '3',
      blogImg: '',
      blogTitle: '3',
      blogSubtitle: '',
      blogDescription: '',
    },
    {
      categoryId: '3',
      blogImg: '',
      blogTitle: '3',
      blogSubtitle: '',
      blogDescription: '',
    },
  ];

  filteredBlogList: {
    categoryId: string;
    blogImg: string;
    blogTitle: string;
    blogSubtitle: string;
    blogDescription: string;
  }[] = [];
  selectedCategoryId = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the category ID from the URL
    this.route.paramMap.subscribe((params) => {
      this.selectedCategoryId = params.get('id') || ''; // Get category ID from route
      this.filterBlogsByCategory();
    });
  }

  filterBlogsByCategory() {
    console.log(this.selectedCategoryId);
    this.filteredBlogList = this.blogList.filter(
      (blog) => blog.categoryId === this.selectedCategoryId
    );
    console.log(this.filteredBlogList);
  }
}
