
import {Component} from "angular2/core";

@Component({
  selector: "contact",
  template: `
        <input [(ngModel)]="contact.firstName" type="text">
        <div>
        T: {{contact.phone}}!<br/>
        E: {{contact.email}}!<br/>
        </div>
    `
    inputs: ["contact"]
})
export class ContactComponent{
    public contact = {};
}
