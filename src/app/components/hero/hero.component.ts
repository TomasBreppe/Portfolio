import { Component } from '@angular/core';
import { LangService } from '../../services/lang.services';


@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
    constructor(public lang: LangService) {}
}
