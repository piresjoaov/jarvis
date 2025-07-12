import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TabService {
  private activeTabSubject = new BehaviorSubject<string | null>(null);
  activeTab$: Observable<string | null> = this.activeTabSubject.asObservable();

  private openTabsSubject = new BehaviorSubject<string[]>([]);
  openTabs$: Observable<string[]> = this.openTabsSubject.asObservable();

  constructor() {}

  openTab(tabName: string): void {
    const currentTabs = this.openTabsSubject.getValue();
    if (!currentTabs.includes(tabName)) {
      this.openTabsSubject.next([...currentTabs, tabName]);
    }
    this.activeTabSubject.next(tabName);
  }

  closeTab(tabName: string): void {
    const currentTabs = this.openTabsSubject
      .getValue()
      .filter((tab) => tab !== tabName);
    this.openTabsSubject.next(currentTabs);

    if (this.activeTabSubject.getValue() === tabName) {
      this.activeTabSubject.next(
        currentTabs.length > 0 ? currentTabs[currentTabs.length - 1] : null
      );
    }
  }

  closeAllTabs(): void {
    this.openTabsSubject.next([]);
    this.activeTabSubject.next(null);
  }

  setActiveTab(tabName: string): void {
    this.activeTabSubject.next(tabName);
  }
}
