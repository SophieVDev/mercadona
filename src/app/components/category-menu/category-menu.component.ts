import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';


@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss']
})
export class CategoryMenuComponent implements OnInit {
  selectedCategory: string | null = null;


  @Input() menu : any
  @Output() menuAction:EventEmitter<any> = new EventEmitter()


  ngOnInit(): void {
      
  }

  getMenuAction(){
    this.menuAction.emit(this.menu);
  }

}