import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BlogGridComponent } from './components/blog-grid/blog-grid.component';
import { AboutComponent } from './components/about/about.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BlogListComponent } from './components/blog-grid/blog-card/blog-list/blog-list.component';
import { BlogContentComponent } from './components/blog-grid/blog-card/blog-list/blog-content/blog-content.component';

export const routes: Routes = [
  { path: '', redirectTo: ' blog', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    data: { animation: 'login' },
  },
  {
    path: 'blog',
    component: BlogGridComponent,
    data: { animation: 'blog' },
  },
  {
    path: 'blog/:id',
    component: BlogListComponent,
    data: { animation: 'blog' },
  },
  {
    path: 'blog/:id/:name',
    component: BlogContentComponent,
    data: { animation: 'blog' },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'about' },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { animation: 'register' },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'contact' },
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { animation: 'portfolio' },
  },
];
