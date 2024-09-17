import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IntercepteurApiService } from '../intercepteur-api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent{
count1 = 12
count3=4
count2 = 5
count4=2

decrement (){
  this.count1--
}
increment (){
  this.count1++
}

decrement2 (){
  this.count3--
}
increment2 (){
  this.count3++
}

decrement1 (){
  this.count2--
}
increment1 (){
  this.count2++
}

decrement3 (){
  this.count4--
}
increment3 (){
  this.count4++
}






showConfirmation: boolean = false;

onDelete() {
    this.showConfirmation = true;
}

confirmDelete() {
    // Logique pour la suppression
    console.log('Élément supprimé');
    this.showConfirmation = false;
}

cancelDelete() {
    this.showConfirmation = false;
}


}
