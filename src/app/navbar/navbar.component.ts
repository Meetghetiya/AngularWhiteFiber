import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Output() sectionNavigate = new EventEmitter<string>();
  menuOpen = false;
  subMenu = '';

  navigate(section: string) {
    this.sectionNavigate.emit(section);
  }

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.subMenu = '';
  }

  openSubMenu(menu: string) {
    this.subMenu = menu;
  }

  backToMainMenu() {
    this.subMenu = '';
  }

  // closeMenu() {
  //   this.menuOpen = false;
  //   this.subMenu = '';
  // }

  // navigateTo(route: string) {
  //   this.menuOpen = false;
  //   this.subMenu = '';

  //   if (this.router.url === '/' + route) {
  //     // If the route is the same, force reload
  //     this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  //       this.router.navigate(['/' + route]);
  //     });
  //   } else {
  //     this.router.navigate(['/' + route]);
  //   }
  // }
}
