import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "sp-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"],
})
export class ButtonComponent {
  @Input() type: string = "button";
  @Input() kind?: "primary" | "outline";
  @Input() disabled = false;

  @Output() onClick = new EventEmitter();
}
