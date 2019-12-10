import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counting-buttons',
  templateUrl: './counting-buttons.component.html',
  styleUrls: ['./counting-buttons.component.css']
})
export class CountingButtonsComponent implements OnInit {

  @Input()
  value = 0;

  @Output()
  valueChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  emit() {
    this.valueChange.emit(this.value);
  }

  incValue() {
    this.value += 1;
    this.emit();
  }

  decValue() {
    this.value -= 1;
    this.emit();
  }

}
