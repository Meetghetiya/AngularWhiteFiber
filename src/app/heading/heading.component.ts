import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent {
 @Input() textColor: string = '';
 @Input() textColor2: string = '';
 @Input() titleText: string = '';
 @Input() titleText2: string = '';
}
