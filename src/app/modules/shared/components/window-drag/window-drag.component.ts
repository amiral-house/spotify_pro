import { Component, Input } from "@angular/core";

@Component({
  selector: "sp-window-drag",
  templateUrl: "./window-drag.component.html",
  styleUrls: ["./window-drag.component.css"],
})
export class WindowDragComponent {
  @Input() height?: string;
  @Input() width?: string;
}
