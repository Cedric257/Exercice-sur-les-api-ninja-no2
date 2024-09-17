import { Component, OnInit } from '@angular/core';
import { IntercepteurApiService } from '../intercepteur-api.service';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent implements OnInit {


  public data: any;
  Loading : boolean = true;
  
  constructor(private intercepteur_API : IntercepteurApiService){}
  
  ngOnInit():void {
    this.intercepteur_API.getData().subscribe(
      (response)=>{this.data = response;
      console.log('Data display:',this.data);
      this.Loading = false;
  },(error)=>{
    console.error('Error of data',error)
  }
  );
}

}
