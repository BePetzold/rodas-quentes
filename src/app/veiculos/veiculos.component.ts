import { Component, OnInit, Input } from '@angular/core';
import { CarrosServiceService } from '../carros-service.service';


@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

  carros = [];
  @Input() marca: any;
  constructor(private api: CarrosServiceService) { }

  ngOnInit() {

    this.api.getVeiculosMarca(this.marca.id).subscribe(res => {
      this.carros = res;
    })

  }

}
