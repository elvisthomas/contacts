import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalService } from '../service/global.service';
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  subscription: Subscription;
  loadingLabel: String =  'Loading... Please Wait.';
  constructor(
    private globalService: GlobalService
  ) {

  }

  ngOnInit() {
  }

}
