import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  message: string = '';

  onSubmit() {
    // Handle form submission here
    alert('Form submitted!');
  }
}
