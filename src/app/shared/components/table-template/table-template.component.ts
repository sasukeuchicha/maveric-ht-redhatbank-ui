import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustomerModel } from 'src/app/models/customer.model';
import { SavingsAccountModel } from 'src/app/models/savings-account.model';

type Data = CustomerModel | SavingsAccountModel;
@Component({
  selector: 'app-table-template',
  templateUrl: './table-template.component.html',
  styleUrls: ['./table-template.component.css'],
})
export class TableTemplateComponent implements OnInit {
  constructor() {}
  headers: any;
  selectedDropdownValue: number = 25;
  numberOfRowOptions: number = 0;
  @Input() columns!: string[];
  @Input() visibleColumnsElements!: string[];
  @Input() dataTable!: Data[];
  @Input() collectionSize!: number;
  @Input() pageSize!: number;
  @Input() rowOptions: string[] = [];
  @Input() page: number = 1;

  ngOnInit() {
    console.log(this.columns);
    console.log(this.dataTable);
    console.log(this.visibleColumnsElements);
    this.pageSize = 25;
    if (this.rowOptions.length != 0) {
      console.log(this.rowOptions);
      this.columns.push('');
      this.numberOfRowOptions = this.rowOptions.length;
    }
  }
  updateDropdownValue(value: number) {
    this.pageSize = value;
    this.selectedDropdownValue = value;
  }
  sendEventBack(item: Data, action: string) {
    console.log(item, action);
  }
}
