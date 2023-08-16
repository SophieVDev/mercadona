import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss']
})
export class CategoryMenuComponent implements OnInit {

  @Input() menu : any
  @Output() menuAction:EventEmitter<any> = new EventEmitter()
  constructor() {}

  ngOnInit(): void {
      
  }

  getMenuAction(){
    this.menuAction.emit(this.menu)
  }
}
