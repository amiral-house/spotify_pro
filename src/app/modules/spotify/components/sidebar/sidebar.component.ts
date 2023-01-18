import { Component } from "@angular/core";
import { SpotifyUserController } from "../../controllers/user.controller";

@Component({
  selector: "sp-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent {
  constructor(public readonly spotifyUserController: SpotifyUserController) {}
}
