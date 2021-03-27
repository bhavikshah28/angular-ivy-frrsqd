import { Component, Input } from "@angular/core";

@Component({
  selector: "footer",
  template: "<h1>This is my {{footersection}}</h1>",
  styles: ["h1{color:red;}"]
})
export class FooterComponent {
  @Input() footersection: string;
}
