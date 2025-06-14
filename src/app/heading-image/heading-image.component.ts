import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading-image',
  templateUrl: './heading-image.component.html',
  styleUrls: ['./heading-image.component.css']
})
export class HeadingImageComponent {
   @Input() text : string = '';
   @Input() backgroundImage: string = '/assets/Export.jpg';
}
