import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { TechComponent } from './components/tech/tech.component';
import { FocusComponent } from './components/focus/focus.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ParticlesBgComponent } from './components/particles-bg/particles-bg.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent, HeroComponent, AboutComponent, TechComponent, FocusComponent,
    ProjectsComponent, TimelineComponent, ContactComponent, FooterComponent, ParticlesBgComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {}
