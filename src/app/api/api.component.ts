import { Component, OnInit } from '@angular/core';
import { IntercepteurApiService } from '../intercepteur-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent implements OnInit {


  public data: Array<any> = [];
  name : string = 'michael jordan';
  Loading : boolean = true;
  
  constructor(private intercepteur_API : IntercepteurApiService){}
  
  ngOnInit(){
    this.getExercices()
  }
  
  async getExercices (){
  this.intercepteur_API.getData().subscribe({
    next: response=>{
      this.data = response;
      console.log("data displayed",this.data);
      this.Loading = false;
  }}
  )}

}
