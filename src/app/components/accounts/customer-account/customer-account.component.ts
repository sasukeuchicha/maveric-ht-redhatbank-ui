import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddCustomerComponent } from 'src/app/forms/add-customer/add-customer.component';
import { CustomerAccountsService } from 'src/app/services/customer-accounts.service';
import { AccountTemplateComponent } from 'src/app/shared/components/account-template/account-template.component';
import { Options } from 'src/app/models/options.model';
import { CustomerResponse } from 'src/app/models/customer-response.model';
import { TableTemplateComponent } from 'src/app/shared/components/table-template/table-template.component';
import { CustomerModel } from 'src/app/models/customer.model';

@Component({
  selector: 'app-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrls: ['./customer-account.component.css'],
})
export class CustomerAccountComponent {
  searchForm: FormGroup;
  modalRef!: BsModalRef;
  currentCustomers: CustomerModel[] = [];
  page = 2;
  pageSize = 4;
  tableColumns!: string[];
  visibleColumnElements!: string[];
  response!: CustomerResponse;
  rowOptions: string[] = ['Modify'];
  searchText!: string;
  collectionSize: number = 0;
  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerAccountsService,
    private modalService: BsModalService
  ) {
    this.searchForm = this.formBuilder.group({
      searchBar: [''],
    });
  }

  ngOnInit() {
    const tableColumns = [
      'First Name',
      'Last Name',
      'Email ID',
      'Phone Number',
      'City',
      'Customer ID',
    ];
    this.tableColumns = tableColumns;
    this.visibleColumnElements = [
      'firstName',
      'lastName',
      'emailId',
      'phoneNumber',
      'city',
      'customerId',
    ];
    this.currentCustomers = [
      {
        customerId: 1,
        firstName: 'Komal',
        lastName: 'Yadav',
        emailId: 'sdjkf@kjd.com',
        phoneNumber: '9184278214',
        city: 'Bengaluru',
      },
      {
        customerId: 2,
        firstName: 'Bumra',
        lastName: 'Yadav',
        emailId: 'sdjkf@kjd.com',
        phoneNumber: '9184278214',
        city: 'Bengaluru',
      },
      {
        customerId: 3,
        firstName: 'Zagar',
        lastName: 'Yadav',
        emailId: 'sdjkf@kjd.com',
        phoneNumber: '9184278214',
        city: 'Bengaluru',
      },
    ];
    this.collectionSize = this.currentCustomers.length;
    return;
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.customerService.getAllCustomers().subscribe((res) => {
      this.currentCustomers = res;
      this.collectionSize = this.currentCustomers.length;
    });
  }

  getSearch(searchText: string) {
    this.searchText = searchText;
    console.log('search button clicked ' + searchText);
    this.getAllCustomers();
  }
  createNewCustomer(createButtonClicked: Event) {
    console.log('value emitted and  ' + createButtonClicked);
    this.modalRef = this.modalService.show(AddCustomerComponent);
  }
}
