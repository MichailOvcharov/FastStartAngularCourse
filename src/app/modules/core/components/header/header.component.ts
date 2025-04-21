import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy
{
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Вызов ngOnChanges()");
  }

  ngOnInit(): void {
    console.log("Вызов ngOnInit()");
  }

  ngAfterContentChecked(): void {
    console.log("Вызов ngAfterContentChecked()");
  }

  ngAfterContentInit(): void {
    console.log("Вызов ngAfterContentInit()");
  }

  ngAfterViewChecked(): void {
    console.log("Вызов ngAfterViewChecked()");
  }

  ngAfterViewInit(): void {
    console.log("Вызов ngAfterViewInit()");
  }

  ngDoCheck(): void {
    console.log("Вызов ngDoCheck()");
  }

  ngOnDestroy(): void {
    console.log("Вызов ngOnDestroy()");
  }
 public onExit():void
 {
     console.log("Выход!");
 }

}
