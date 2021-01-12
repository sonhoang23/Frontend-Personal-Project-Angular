import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

const routes: Routes = [
	{
		path: "admin",
		loadChildren: () => import("./features/admin/admin.module").then((m) => m.AdminModule)
	},
	{
		path: "customer",
		loadChildren: () => import("./features/customer/customer.module").then((m) => m.CustomerModule)
	},
	{path: "", pathMatch: "full", redirectTo: "/admin"}
	// {
	//   path: 'welcome',
	//   loadChildren: () =>
	//     import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
	// },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
