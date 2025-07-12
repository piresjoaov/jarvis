import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  Signal,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

// Components
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { StudySchedulerComponent } from './components/study-scheduler/study-scheduler.component';
import { FileViewerComponent } from './components/file-viewer/file-viewer.component';
import { FileConversionComponent } from './components/file-conversion/file-conversion.component';

// Services
import { TabService } from './services/tab.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SidebarComponent,
    TabBarComponent,
    ChatWindowComponent,
    TerminalComponent,
    StudySchedulerComponent,
    FileViewerComponent,
    FileConversionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'JARVIS';

  isSidebarOpen = true;
  isMobile = false;

  activeTab: string | null = null;
  activeLeftPanel: 'chat' | 'file-conversion' | 'study-scheduler-form' | null =
    'chat';

  private tabSubscription!: Subscription;

  constructor(private tabService: TabService) {}

  ngOnInit(): void {
    this.updateResponsiveState();

    // Subscribe to tab changes
    this.tabSubscription = this.tabService.activeTab$.subscribe((tab) => {
      this.activeTab = tab;
    });
  }

  ngOnDestroy(): void {
    if (this.tabSubscription) {
      this.tabSubscription.unsubscribe();
    }
  }

  /** Updates mobile/desktop state on screen resize */
  @HostListener('window:resize')
  updateResponsiveState(): void {
    if (typeof window === 'undefined') return; // prevent SSR crash

    const isNowMobile = window.innerWidth < 768;

    if (isNowMobile !== this.isMobile) {
      this.isMobile = isNowMobile;
    }

    if (this.isMobile) {
      this.isSidebarOpen = false;
    }
  }

  /** Toggles sidebar open/closed */
  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  /** Updates the active component on the left panel */
  setActiveLeftPanel(
    panel: 'chat' | 'file-conversion' | 'study-scheduler-form'
  ): void {
    this.activeLeftPanel = panel;

    if (panel !== 'chat') {
      this.tabService.closeAllTabs(); // Optional behavior
    }
  }
}
