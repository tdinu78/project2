import { Component, OnInit } from '@angular/core';
import { NavItem } from './navitem.model';
import { NavbarService } from './navbar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [ NavbarService ]
})
export class NavbarComponent implements OnInit {
  private navItems: NavItem[];

  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    // this.navItems = this.navbarService.getNavItems();
    this.navbarService.getNavItems()
      .subscribe(
        (data: NavItem[]) => {
          this.navItems = data;
        },
        (error) => {
          console.log( 'am eroarea: ', error);
          this.navItems = [];
      }
      )
  }

}
