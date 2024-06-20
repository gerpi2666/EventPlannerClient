import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent {
  currentUser: any;
  isAutenticated: boolean;


  constructor(private router: Router) { this.isAutenticated=true}

  ngOnInit(): void {}

  login(){
    this.router.navigate(['login']);
  }
  logout(){
    //this.authService.logout();
    this.router.navigate(['inicio']);
  }
}
