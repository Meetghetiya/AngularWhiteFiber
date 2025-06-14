import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mission-vision',
  templateUrl: './mission-vision.component.html',
  styleUrls: ['./mission-vision.component.css']
})
export class MissionVisionComponent {
  @Input() title: string = '';
  @Input() items: { heading: string, description: string }[] = [];
  @Input() darkMode: boolean = false;
}
