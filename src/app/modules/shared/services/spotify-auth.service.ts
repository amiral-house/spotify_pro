import { Injectable } from "@angular/core";
import { invoke } from "@tauri-apps/api";
import { WindowManager } from "@tauri-apps/api/window";
import { listen } from "@tauri-apps/api/event";
import { environment } from "src/environments/environment";
import { BehaviorSubject, map } from "rxjs";
import { StorageService } from "./storage.service";
import { SpotifyTokenData } from "../types";

@Injectable({
  providedIn: "root",
})
export class SpotifyAuthService {
  $tokenData = new BehaviorSubject<SpotifyTokenData | null>(null);
  $isAuth = this.$tokenData.pipe(map((data) => Boolean(data)));

  private authUrl = `https://accounts.spotify.com/ru/authorize?response_type=code&redirect_uri=${environment.localPseudoServer}&client_id=${environment.clientId}&state=q7wjvc`;

  constructor(private storageService: StorageService) {
    this.storageService.read<SpotifyTokenData>("spotify_token").then((data) => {
      if (data) {
        this.$tokenData.next(data);
      }
    });
  }

  async login() {
    await invoke("create_auth_window", { uri: this.authUrl });
    const authWindow = new WindowManager("oauth_window");
    const unlisten = await listen(
      "change_navigation_url",
      async ({ payload }: { payload: string }) => {
        console.log(payload);
        if (payload.indexOf(environment.localPseudoServer) === 0) {
          const searchParams = new URL(payload).searchParams;
          const code = searchParams.get("code") || "";
          const tokenData = await this.getTokensFromCode(code);

          // TODO work with token data

          unlisten?.();
          authWindow.close();
        }
      }
    );
  }

  async getTokensFromCode(code: string) {
    const formData = new FormData();
    formData.set("code", code);
    formData.set("redirect_uri", environment.localPseudoServer);

    const data = await fetch("https://accounts.spotify.com/api/token", {
      body: formData,
      headers: {
        Authorization: `Basic ${btoa(
          `${environment.clientId}:${environment.clientSecret}`
        )}`,
      },
    }).then((res) => res.json());

    console.log(data);

    return data;
  }
}
