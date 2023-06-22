import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent  {
  inP!: ElementRef[];
  
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit() {
    this.inP = this.elementRef.nativeElement.querySelectorAll('.input-field');
  }
  
}
