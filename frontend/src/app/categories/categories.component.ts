import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from '../navbar/navitem.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Input() category;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.category = this.route.snapshot.params['name'];

    this.route.params.subscribe(
      (params) => { 
        this.category = params['name']
       }
    );

  }

}
