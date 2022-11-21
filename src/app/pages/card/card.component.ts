import { Component } from '@angular/core';


const card = document.querySelector('#card');

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {

}

card?.addEventListener('click', () => {
  card.classList.toggle('active');
});
