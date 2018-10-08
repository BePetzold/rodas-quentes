import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  template:
    `<div class="data">
      <p>CONSULTA REALIZADA: {{today | date:'dd'}}/{{today | date:'MM'}}/{{today | date:'yyyy'}} às {{today | date:'HH:mm'}}</p>
    </div>`
})

export class DataComponent {
  today: number = Date.now();
}