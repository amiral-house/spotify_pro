import { Component } from "@angular/core";
import { SpotifyAuthService } from "src/app/modules/shared/services/spotify-auth.service";

@Component({
  selector: "sp-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  constructor(private readonly authController: SpotifyAuthService) {}

  login() {
    this.authController.login();
  }
}
