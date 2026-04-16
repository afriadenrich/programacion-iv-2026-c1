import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {}
