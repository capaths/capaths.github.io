import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {Application} from "pixi.js";

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements AfterViewInit, OnDestroy {
  @ViewChild('container') container: ElementRef<HTMLDivElement> | null = null;

  app = new Application();

  ngAfterViewInit(): void {
    if (this.container) {
      this.container.nativeElement.appendChild(this.app.view as unknown as Node);
    }
  }



  ngOnDestroy(): void {
    this.app.destroy(true);
  }
}
