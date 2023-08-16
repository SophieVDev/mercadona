import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appCustomRouterLinkActive]'
})
export class CustomRouterLinkActiveDirective implements OnInit {
  constructor(private router: Router, private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const isActive = this.router.isActive('', true);
    if (isActive) {
      this.renderer.addClass(this.el.nativeElement, 'active');
    }
  }
}