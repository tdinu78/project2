import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from '../navbar/navitem.model';
import { ActivatedRoute } from '@angular/router';
import { SearchfrmComponent } from './searchfrm/searchfrm.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  host: {'(window:keydown)': 'hotkeys($event)'};
  @Input() category;
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

    setSelectedImage(image){
        this.selectedImage= image;
    }

    navigate(forward){
        var index = this.datasource.indexOf(this.selectedImage)+(forward ? 1: -1);
        if(index >= 0 && index < this.datasource.length){
            this.selectedImage = this.datasource[index];
        }
    }

    hotkeys(event){
        if(this.selectedImage){
            if (event.keyCode == 37){
                this.navigate(false);
            }else if(event.keyCode == 39){
                this.navigate(true);
            }
        }
    }
}
