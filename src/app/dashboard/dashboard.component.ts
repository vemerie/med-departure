import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../core/shared/shared.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
