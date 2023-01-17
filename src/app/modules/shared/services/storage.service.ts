import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  constructor() {}

  async read<T extends unknown>(key: string): Promise<T | undefined> {
    try {
      return JSON.parse(localStorage.getItem(key) || "");
    } catch (_) {
      return undefined;
    }
  }

  async write<T extends unknown>(key: string, payload: T) {
    try {
      localStorage.setItem(key, JSON.stringify(payload));
    } catch (_) {}
  }
}
