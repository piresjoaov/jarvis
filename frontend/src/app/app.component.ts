import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngClass and ngIf

@Component({
  selector: 'app-root',
  standalone: true, // Ensure this is standalone if not already
  imports: [RouterOutlet, CommonModule], // Add CommonModule here
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  activeTab: string = 'document1'; // Default active tab

  selectTab(tabName: string): void {
    this.activeTab = tabName;
  }
}
