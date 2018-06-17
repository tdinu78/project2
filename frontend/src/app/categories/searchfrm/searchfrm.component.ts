import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Supplier} from "../supplier.model";

@Component({
  selector: 'app-searchfrm',
  templateUrl: './searchfrm.component.html',
  styleUrls: ['./searchfrm.component.scss']
})
export class SearchfrmComponent implements OnInit{
    sdata:Supplier;
    @Input() category;

  constructor(private http:HttpClient){
      // this.sdata = new Supplier("","","");
      this.category="Resturante";
      this.sdata={
          type:this.category,
          name: null,
          lifecycle: null,
          place: null,
          phoneNumber: null,
          email: null,
          minPrice: null,
          minInv: null,
          maxInv: null,
          outdoor: null,
          accommodation: null,
          fireworks: null,
          events: null,
          preparations: null,
          parking: null,
          password: null,
      }
  }

    ngOnInit(): void {
        // if (this.category === "Resturante") {
        //     var pp = "";
        // }
    }
    onSubmit():void{
        var pp = "";
        }
}
