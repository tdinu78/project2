import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {SupplierModel} from "../supplier.model";
import {GglplcsComponent} from "../../gglplcs/gglplcs.component";
import {SearchfrmService} from "./searchfrm.service";
import {NavItem} from "../../navbar/navitem.model";
import {SupplierRespModel} from "../supplierResp.model";

@Component({
  selector: 'app-searchfrm',
  templateUrl: './searchfrm.component.html',
  styleUrls: ['./searchfrm.component.scss'],
  providers: [SearchfrmService]
})
export class SearchfrmComponent implements AfterViewInit{
    sdata:SupplierModel;
    sdataArr:Array<SupplierModel>;
    sdataArrCount:number;
    @Input() s_category:string;
    @ViewChild(GglplcsComponent) ggl_place;

  constructor(private searchfrmService: SearchfrmService){
      this.sdata={
          type:this.s_category,
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

    ngAfterViewInit() {
        this.sdata.place = this.ggl_place.formatted_address;
    }

    onSubmit():void{
        this.sdata.place = this.ggl_place.formatted_address;
        this.searchfrmService.getSearchResults(this.sdata)
            .subscribe((data : SupplierRespModel)=>{
            this.sdataArr=data.results;
            this.sdataArrCount=data.count;
        },
                (error) => {
                    console.log('am eroarea: ', error);
                    this.sdataArr = [];
                });
        }
}
