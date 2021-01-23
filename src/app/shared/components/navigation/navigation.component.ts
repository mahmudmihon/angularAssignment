import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  isAdmin: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    var role = sessionStorage.getItem('role');

    if(role === 'admin') {
      this.isAdmin = true;
    }
  }

  signOut() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
