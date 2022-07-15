import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiDetails } from 'src/details';
import { APIService } from 'src/services/API/api.service';

@Component({
  selector: 'app-sourcedetails',
  templateUrl: './sourcedetails.component.html',
  styleUrls: ['./sourcedetails.component.css']
})
export class SourcedetailsComponent implements OnInit {
  
  ELEMENT_DATA!: ApiDetails[];
  displayedColomns: string[] = ['id', 'enabled', 'name', 'link','color','image','icon','importance','language','global'];
  dataSource = new MatTableDataSource<ApiDetails>(this.ELEMENT_DATA);

  constructor(private service:APIService) { }
  

  ngOnInit(): void {
    this.getAllDetails();
  }

  public getAllDetails() {
    let resp = this.service.getSourceData(1,50);
    resp.subscribe(report=>this.dataSource.data=report as ApiDetails[] )


  }

}
