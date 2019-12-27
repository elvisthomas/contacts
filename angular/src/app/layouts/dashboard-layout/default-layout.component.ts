import {
  Component,
  OnDestroy,
  ViewEncapsulation
} from '@angular/core';
import {
  DOCUMENT
} from '@angular/common';
import {
  navItems,
} from '../../_nav';
import {
  Router
} from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DefaultLayoutComponent implements OnDestroy {
  public navItems = navItems;
  constructor(private router: Router,
  ) {


    }

    ngOnDestroy(): void {
    }

}
