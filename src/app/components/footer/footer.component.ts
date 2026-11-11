import { Component } from '@angular/core';
import { LangService } from '../../services/lang.services';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(public lang: LangService) {}

  year = new Date().getFullYear();
}
