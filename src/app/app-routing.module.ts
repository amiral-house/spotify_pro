import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthModule } from "./modules/auth/auth.module";
import { AuthGuard } from "./modules/shared/guards/auth.guard";
import { SpotifyModule } from "./modules/spotify/spotify.module";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/auth",
  },
  {
    path: "app",
    canActivate: [AuthGuard],
    loadChildren: () => SpotifyModule,
  },
  {
    path: "auth",
    pathMatch: "full",
    loadChildren: () => AuthModule,
  },
  {
    path: "**",
    redirectTo: "/app",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabledBlocking",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
