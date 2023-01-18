import { Injectable } from "@angular/core";
import { SpotifyApiService } from "../../shared/services/spotify-api.service";

@Injectable({
  providedIn: "root",
})
export class SpotifyUserController {
  $userData = this.spotifyApi.getMe();

  constructor(private readonly spotifyApi: SpotifyApiService) {}
}
