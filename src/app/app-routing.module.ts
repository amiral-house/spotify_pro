import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthModule } from "./modules/auth/auth.module";
import { AuthGuard } from "./modules/shared/guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/auth",
  },
  {
    path: "app",
    canActivate: [AuthGuard],
    loadChildren: () => null as any,
  },
  {
    path: "auth",
    pathMatch: "full",
    loadChildren: () => AuthModule,
  },
  {
    path: "**",
    redirectTo: "/auth",
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
