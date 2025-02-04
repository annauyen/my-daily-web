import { NgClass } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [
    NgClass,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  isMenuVisible = false;

  ngOnInit(): void {
    this.updateMenuVisibility(window.innerWidth); // Set initial state based on screen size
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateMenuVisibility((event.target as Window).innerWidth);
  }

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

  private updateMenuVisibility(width: number): void {
    this.isMenuVisible = width > 768; // Show menu if screen is larger than 768px
  }
}
