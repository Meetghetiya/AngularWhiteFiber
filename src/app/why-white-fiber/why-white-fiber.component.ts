import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import {
  trigger,
  transition,
  style,
  animate,
  query,
  group,
} from '@angular/animations';

@Component({
  selector: 'app-why-white-fiber',
  templateUrl: './why-white-fiber.component.html',
  styleUrls: ['./why-white-fiber.component.css'],
  animations: [
    trigger('slideAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate(
          '400ms ease-out',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
      transition(':leave', [
        animate(
          '400ms ease-in',
          style({ transform: 'translateX(-100%)', opacity: 0 })
        ),
      ]),
    ]),
  ],
})
export class WhyWhiteFiberComponent implements OnInit, OnDestroy {
  tabs = [
    'Tissue Paper Products',
    'Sugarcane Bagasse Tableware',
    'Biodegradable Paper Cups',
    'Paper Bags',
  ];
  selectedTab = 1;
  canScrollLeft = false;
  canScrollRight = true;

  private autoSwitchInterval: any;
  private autoSwitchDelay = 5000;
  private isAutoSwitching = true;

  productRange: string[] = [
    'Facial tissues',
    'Toilet rolls',
    'Paper napkins',
    'Kitchen rolls',
  ];

  productRange2: string[] = [
    'Plates (Round, square, compartmentalized)',
    'Bowls (various sizes)',
    'Cups',
    'Meal containers & clamshells',
  ];

  sustainabilityHighlights = [
    {
      title: 'Recycled Content',
      description: 'Made from recycled or FSC-certified paper.',
    },
    {
      title: 'Chlorine-Free',
      description: 'Processed without harmful bleaching agents.',
    },
    {
      title: 'Biodegradable',
      description: 'Breaks down naturally, reducing landfill waste.',
    },
  ];

  sustainabilityHighlights2 = [
    {
      title: 'Eco-Friendly',
      description: '100% biodegradable and compostable within 60-90 days.',
    },
    {
      title: 'Durable',
      description:
        'Resistant to heat, oil, and moisture. Sturdy & leakproof construction.',
    },
    {
      title: 'Microwave and Freezer Safe',
      description: 'Suitable for a wide range of temperatures.',
    },
    {
      title: 'Food Safe',
      description: 'Free from harmful chemicals and toxins.',
    },
  ];

  sustainabilityHighlights3 = [
    {
      title: 'Plastic-Free',
      description: 'No PE or PLA linings.',
    },
    {
      title: 'Leak-Proof',
      description: 'Designed to prevent spills and leaks.',
    },
    {
      title: 'Customizable',
      description:
        'Options for branding and design to enhance customer engagement.',
    },
  ];

  sustainabilityHighlights4 = [
    {
      title: 'Sustainable Materials',
      description: 'Made from kraft paper and other renewable resources.',
    },
    {
      title: 'Eco-Friendly',
      description: 'Recyclable and reusable.',
    },
    {
      title: 'Custom Printing',
      description: 'Enhance brand visibility with personalized designs.',
    },
    {
      title: 'Variety of Sizes',
      description:
        'Available in multiple dimensions to suit different applications.',
    },
  ];

  ngOnInit() {
    this.startAutoSwitch();
  }

  ngOnDestroy() {
    this.stopAutoSwitch();
  }

  startAutoSwitch() {
    if (this.isAutoSwitching) {
      this.autoSwitchInterval = setInterval(() => {
        this.nextTab();
      }, this.autoSwitchDelay);
    }
  }

  nextTab() {
    this.selectedTab =
      this.selectedTab >= this.tabs.length ? 1 : this.selectedTab + 1;
  }

  // Stop automatic tab switching
  stopAutoSwitch() {
    if (this.autoSwitchInterval) {
      clearInterval(this.autoSwitchInterval);
      this.autoSwitchInterval = null;
    }
  }

  @ViewChild('tabContainer', { static: false }) tabContainer!: ElementRef;

  ngAfterViewInit() {
    // Check scroll state after view initialization
    setTimeout(() => {
      this.checkScrollButtons();
    }, 100);
  }

  selectTab(tabIndex: number) {
    this.selectedTab = tabIndex;

    this.stopAutoSwitch();
    // Scroll to show the selected tab when clicking directly on a tab
    setTimeout(() => {
      this.startAutoSwitch();
      this.scrollToSelectedTab();
      this.checkScrollButtons();
    }, 50);
  }

  setAutoSwitchDelay(milliseconds: number) {
    this.autoSwitchDelay = milliseconds;

    // Restart with new delay if currently auto-switching
    if (this.isAutoSwitching) {
      this.stopAutoSwitch();
      this.startAutoSwitch();
    }
  }

  // Pause auto-switching on hover (call from template)
  pauseAutoSwitch() {
    this.stopAutoSwitch();
  }

  // Resume auto-switching when not hovering (call from template)
  resumeAutoSwitch() {
    if (this.isAutoSwitching) {
      this.startAutoSwitch();
    }
  }

  scrollTabs(direction: 'left' | 'right') {
    // Change selected tab first
    if (direction === 'left' && this.selectedTab > 1) {
      this.selectedTab--;
    } else if (direction === 'right' && this.selectedTab < this.tabs.length) {
      this.selectedTab++;
    }

    // Scroll to show the newly selected tab
    this.scrollToSelectedTab();

    // Update button states after scroll animation
    setTimeout(() => {
      this.checkScrollButtons();
    }, 300);
  }

  private scrollToSelectedTab() {
    if (!this.tabContainer) return;

    const container = this.tabContainer.nativeElement;
    const tabs = container.querySelectorAll('.tab');
    const selectedTabElement = tabs[this.selectedTab - 1] as HTMLElement;

    if (selectedTabElement) {
      // Calculate the position to center the selected tab
      const containerWidth = container.clientWidth;
      const tabLeft = selectedTabElement.offsetLeft;
      const tabWidth = selectedTabElement.offsetWidth;
      const scrollLeft = tabLeft - containerWidth / 2 + tabWidth / 2;

      container.scrollTo({
        left: Math.max(0, scrollLeft),
        behavior: 'smooth',
      });
    }
  }

  onScroll() {
    this.checkScrollButtons();
  }

  private checkScrollButtons() {
    if (!this.tabContainer) return;

    const container = this.tabContainer.nativeElement;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    // Check if we can scroll left (also check if we're not at first tab)
    this.canScrollLeft = scrollLeft > 0 && this.selectedTab > 1;

    // Check if we can scroll right (also check if we're not at last tab)
    this.canScrollRight =
      scrollLeft < scrollWidth - clientWidth - 1 &&
      this.selectedTab < this.tabs.length;
  }
}
