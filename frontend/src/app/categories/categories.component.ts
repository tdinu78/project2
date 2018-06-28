import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SupplierRespModel} from "./supplierResp.model";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Input() category;
  public supplierRespModel:SupplierRespModel;
  public selectedImage;
  public datasource= [
      {
          "url":"http://lorempixel.com/200/200/",
          "title":"Aliquam erat volutpat",
          "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
      },
      {
          "url":"http://lorempixel.com/200/200/",
          "title":"Aliquam erat volutpat",
          "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
      },
      {
          "url":"http://lorempixel.com/200/200/",
          "title":"Aliquam erat volutpat",
          "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
      },
      {
          "url":"http://lorempixel.com/200/200/",
          "title":"Aliquam erat volutpat",
          "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
      },
      {
          "url":"http://lorempixel.com/200/200/",
          "title":"Aliquam erat volutpat",
          "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
      },
      {
          "url":"http://lorempixel.com/200/200/",
          "title":"Aliquam erat volutpat",
          "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
      },
      {
          "url":"http://lorempixel.com/200/200/",
          "title":"Aliquam erat volutpat",
          "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
      },
      {
          "url":"http://lorempixel.com/200/200/",
          "title":"Aliquam erat volutpat",
          "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
      },
      {
          "url":"http://lorempixel.com/200/200/",
          "title":"Aliquam erat volutpat",
          "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
      },
      {
          "url":"http://lorempixel.com/200/200/",
          "title":"Aliquam erat volutpat",
          "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
      },
      {
          "url":"http://lorempixel.com/200/200/",
          "title":"Aliquam erat volutpat",
          "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
      },
      {
          "url":"http://lorempixel.com/200/200/",
          "title":"Aliquam erat volutpat",
          "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
      },
    ];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.category = this.route.snapshot.params['name'];

    this.route.params.subscribe(
      (params) => { 
        this.category = params['name']
       }
    );

  }

    updateGrid(srm){
      if(srm!=null) {
          this.supplierRespModel = srm;
      }else{
          //are eroare
      }
    }

    setSelectedImage(image){
        this.selectedImage= image;
    }

}
