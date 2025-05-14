import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import { InputTextModule } from 'primeng/inputtext';
import {CoursesService} from "../../../../services/courses/courses.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() public search: EventEmitter<string> = new EventEmitter<string>();
  public searchInput = '';


  constructor(private coursesService: CoursesService) {
  }

  public onSearch(): void {
    this.search.emit(this.searchInput);
    this.coursesService.searchCourses(this.searchInput)
      .subscribe( {next: (courses) => {
      }
      });
  }
}
