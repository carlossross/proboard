import { Component } from '@angular/core';
import { AsideBarComponent } from '../layout/asidebar/asidebar.component';
import { ToolbarComponent } from '../layout/toolbar/toolbar.component';
import { CardComponent } from '../../shared/ui/card/card.component';

@Component({
  selector: 'proboard-shell',
  imports: [AsideBarComponent, ToolbarComponent, CardComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent {}
