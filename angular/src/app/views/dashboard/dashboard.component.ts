import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { JwtService } from '../../shared-ui/service/jwt.service';
import { GlobalService } from '../../shared-ui/service/global.service';
import { AlertService } from '../../shared-ui/alert/alert.service';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  list: any = [{test : ''},{test : ''}];
  constructor(
    private globalService: GlobalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
  ) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.spinner.show();
    this.globalService.getData().subscribe(
      data => {
        if (data.status === 200) {
        console.log('data=========', data.data);
        data = JSON.parse(data.data);
          this.list = data.contacts;
        }
        this.spinner.hide();
      },
      error => {
        this.spinner.hide();
        this.toastr.error(
          'There are some server Please check connection.',
          'Error'
        );
      }
    );
  }


}
