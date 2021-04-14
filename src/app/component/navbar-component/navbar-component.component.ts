import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.scss'],
})
export class NavbarComponentComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToStatPage() {
    this.router.navigate(['stats']);
  }

  goToHomePage() {
    this.router.navigate(['']);
  }
}
