import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { AuthService } from './auth.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-auth',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  authS = inject(AuthService);
}
