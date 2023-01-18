import { Component, ElementRef, Input, ViewChild } from "@angular/core";

@Component({
  selector: "sp-resizable",
  templateUrl: "./resizable.component.html",
  styleUrls: ["./resizable.component.css"],
})
export class ResizableComponent {
  @ViewChild("ref") wrapperRef?: ElementRef<HTMLElement>;

  @Input() minWidth = 100;
  @Input() maxWidth = 300;

  width = this.minWidth + (this.maxWidth - this.minWidth) / 2;
  isResize = false;

  constructor() {
    this.onMove = this.onMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  onMouseDown(event: MouseEvent) {
    event.preventDefault();
    this.isResize = true;

    document.body.style.cursor = "col-resize";

    document.addEventListener("mousemove", this.onMove);
    document.addEventListener("mouseup", this.onMouseUp);
  }

  private onMouseUp() {
    this.isResize = false;
    document.body.style.cursor = "auto";
    document.removeEventListener("mousemove", this.onMove);
    document.removeEventListener("mouseup", this.onMouseUp);
  }

  private onMove(event: MouseEvent) {
    const newWidth = event.clientX - this.wrapperRef!.nativeElement.offsetLeft;

    if (newWidth < this.minWidth) {
      if (this.width !== this.minWidth) {
        this.width = this.minWidth;
      }
    } else if (newWidth > this.maxWidth) {
      if (this.width !== this.maxWidth) {
        this.width = this.maxWidth;
      }
    } else {
      this.width = newWidth;
    }
  }
}
