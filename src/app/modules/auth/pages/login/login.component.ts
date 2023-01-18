import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { SpotifyAuthService } from "src/app/modules/shared/services/spotify-auth.service";

@Component({
  selector: "sp-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnDestroy, OnInit {
  constructor(
    private readonly authController: SpotifyAuthService,
    private readonly router: Router
  ) {}

  subscriptions: Subscription[] = [];

  login() {
    this.authController.login();
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.authController.$isAuth.subscribe(() => {
        this.router.navigate(["app"]);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
