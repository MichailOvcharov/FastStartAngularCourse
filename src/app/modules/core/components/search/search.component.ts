import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() public search: EventEmitter<string> = new EventEmitter<string>();
  public searchInput = '';

  public onSearch(): void {
    this.search.emit(this.searchInput);
    console.log("Нажали поиск!");
  }
}
