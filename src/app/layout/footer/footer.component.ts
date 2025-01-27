import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-footer',
  imports: [UpperCasePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
