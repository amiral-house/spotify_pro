import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable, tap } from "rxjs";
import { SpotifyAuthService } from "../services/spotify-auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private spotifyAuthService: SpotifyAuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.spotifyAuthService.$isAuth.pipe(
      tap((state) => {
        if (!state) {
          this.router.navigate(["auth"]);
        }
      })
    );
  }
}
