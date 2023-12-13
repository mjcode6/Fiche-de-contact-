import { Component } from '@angular/core';

@Component({
  selector: 'app-user-peofile',
  templateUrl: './user-peofile.component.html',
  styleUrls: ['./user-peofile.component.css']
})
export class UserPeofileComponent {
  user = {
    name: 'Doe',
    firstName: 'John',
    age: 25 as number | null,  // Assert type
    quote: '',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  toggleAgeVisibility(): void {
    this.user.age = this.user.age ? null : 25; // Toggle age visibility
  }
}
