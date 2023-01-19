import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PlayerController {
  constructor() {
    this.loadWebSdk();
  }

  private async loadWebSdk(): Promise<void> {
    await new Promise((resolve, reject) => {
      const scriptTag = document.getElementById("spotify-player");

      if (!scriptTag) {
        const script = document.createElement("script");
        script.id = "spotify-player";
        script.type = "text/javascript";
        script.async = false;
        script.defer = true;
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.onload = () => resolve(null);
        script.onerror = (error: any) =>
          reject(new Error(`loadScript: ${error.message}`));
        document.head.appendChild(script);
      } else {
        resolve(null);
      }
    });
  }
}
