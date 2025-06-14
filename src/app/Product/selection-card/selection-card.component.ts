import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selection-card',
  templateUrl: './selection-card.component.html',
  styleUrls: ['./selection-card.component.css']
})
export class SelectionCardComponent {
  @Input() tabs: any[] = [];
  @Input() defaultTab!: string;

  activeTab: string = '';

  // ngOnInit() {
  //   this.activeTab = this.defaultTab || this.tabs[0]?.key;
  // }

  ngOnInit() {
    if (this.defaultTab && this.tabs.some(tab => tab.key === this.defaultTab)) {
      this.activeTab = this.defaultTab;
    } else if (this.tabs.length > 0) {
      this.activeTab = this.tabs[0].key;
    }
  }

  setActiveTab(tabKey: string) {
    this.activeTab = tabKey;
  }

}
