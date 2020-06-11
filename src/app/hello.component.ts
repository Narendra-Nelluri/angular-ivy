import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>
      Hello {{ name }}!
      <app-user-list></app-user-list>
    </h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
}
