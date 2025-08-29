import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.scss'
})
export class DetalleComponent {

  id: number = 0;

constructor(private route: ActivatedRoute) {}

ngOnInit() {
  // this.route.paramMap.subscribe(params => {
  //   if (params.has('id')) {
  //     this.id = +params.get('id')!; // Aquí puedes usar el ID del producto
  //   }
  // });

  this.route.queryParamMap.subscribe(params => {
    if (params.has('id')) {
      this.id = +params.get('id')!; // Aquí puedes usar el ID del producto
    }
  });
}

}
