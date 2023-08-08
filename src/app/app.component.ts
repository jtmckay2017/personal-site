import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal-site';


  projects = [
    {
      title: 'Farmers Market', 
      description:`A simple game about growing and selling farm plants.\n\n

      Made in Unity3d using C# for the 2022 Winter My First Game Jam.`, 
      imgUrl: 'https://img.itch.zone/aW1nLzgwMDg4NjIucG5n/315x250%23c/ndB%2BQJ.png'
    },
    {
      title: 'Farmers Market', 
      description:`A simple game about growing and selling farm plants.\n\n

      Made in Unity3d using C# for the 2022 Winter My First Game Jam.`, 
      imgUrl: 'https://img.itch.zone/aW1nLzgwMDg4NjIucG5n/315x250%23c/ndB%2BQJ.png'
    },

  ]
}
