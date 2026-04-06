import { Component } from '@angular/core';
import { LangService } from '../../services/lang.services';


@Component({
  selector: 'app-focus',
  standalone: true,
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.css'],
})
export class FocusComponent {
  constructor(public lang: LangService) {}
}
