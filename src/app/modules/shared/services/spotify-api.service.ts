import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SpotifyApiService {
  private baseUrl = "https://api.spotify.com/v1";

  constructor(private readonly http: HttpClient) {}

  getMe() {
    return this.http.get<SpotifyApi.CurrentUsersProfileResponse>(
      `${this.baseUrl}/me`
    );
  }
}
