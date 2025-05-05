import {Component, Input} from '@angular/core';
import { CardModule } from 'primeng/card';
import {Router} from "@angular/router";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  text = 'Курсы';
  @Input() breadcrumb: string = "";
  constructor(private router: Router) {  }

  goToMainPage(): void {
    this.router.navigateByUrl('/courses');
  }
}
