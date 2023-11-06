import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Array<any> =[
    /* {id:1, name:"computer", price:350000, check:true},
    {id:2, name:"printer", price:250000, check:false},
    {id:3, name:"keyboard", price:5000, check:true} */
  ];
  constructor(private http: HttpClient){

  }

  ngOnInit(){
      this.http.get<Array<any>>("http://localhost:8089/items")
      .subscribe({
        next: data => this.items = data,
        error: error =>{
          console.log("Error");
        }
      })
  }

  handleCheckItem(item:any){
    this.http.patch<any>(`http://localhost:8089/items/${item.id}`,
    {check:!item.check}).subscribe({
      next: updateItem => {
        item.check=!item.check;
      }
    })

    
  }

}
