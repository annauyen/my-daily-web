import { Component } from '@angular/core';
import { fadeInOut, slideInOut } from '../../shared/animation';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  animations: [slideInOut],
})
export class LoginComponent {}
