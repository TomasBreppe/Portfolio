import { Component } from '@angular/core';
import { LangService } from '../../services/lang.services';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(public lang: LangService) {}

  email = 'tbreppe@gmail.com';

  async copyEmail() {
    try {
      await navigator.clipboard.writeText(this.email);
      alert(this.lang.lang() === 'es' ? 'Email copiado ✅' : 'Email copied ✅');
    } catch {
      alert(
        this.lang.lang() === 'es'
          ? 'No se pudo copiar. Copialo manualmente 🙂'
          : 'Could not copy. Please copy it manually 🙂'
      );
    }
  }
}
