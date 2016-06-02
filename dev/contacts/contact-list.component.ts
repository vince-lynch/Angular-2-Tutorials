import {Component} from "angular2/core";
import {ContactComponent} from "./contact.component";

@Component({
  selector: "contact-list",
  template: `
    <ul>
      <li *ngFor="#contact of contacts"
      (click)="onSelect(contact)" 
      [class.clicked]="selectedContact === contact">
      {{contact.firstName}} {{contact.lastName}}
      </li>
    </ul>
    <contact [contact]="selectedContact"></contact>
    `,
    directives: [ContactComponent],
    styleUrls: ["../src/css/app.css"]
})
export class ContactListComponent{
  public contacts = [{firstName: "Vince", lastName: "Lynch", phone: "07411929130", email: "Autovincelynch@gmail.com"},
  {firstName: "Another", lastName: "Person", phone: "0456929130", email: "Someone@somewhere.com"},
  {firstName: "Elseland", lastName: "Elsewherey", phone: "034543230", email: "Elseland@else.com"}
  ];
  public selectedContact = {};

  onSelect(contact){
    this.selectedContact = contact;
  }
}