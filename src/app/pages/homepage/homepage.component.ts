import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  constructor(){}
headerText: string=""
  menus : any = [{
    id :1,
    name:"Alimentation",
    active:false
  },
  {
    id :2,
    name:"Cosmétique",
    active:false
  },
  {
    id :3,
    name:"Maison",
    active:false
  },
]
  ngOnInit(): void {
      
  }
  handleMenuClick($event : any,index:number){
    console.log($event)

    //Désactive le menu actif lorsque l'on clique sur un autre onglet(couleur verte disparait)
    for(let menu of this.menus){
      menu.active = false
    }
    
    this.menus[index].active =true;
    this.headerText = $event.name

  }

}

