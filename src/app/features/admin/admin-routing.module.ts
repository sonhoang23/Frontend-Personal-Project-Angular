import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {AdminComponent} from "./admin.component";
import {FinanceComponent} from "./components/admin-body/finance/finance.component";
import {HomeComponent} from "./components/admin-body/home/home.component";
import {IndexComponent} from "./components/admin-body/index/index.component";
import {MarketingComponent} from "./components/admin-body/marketing/marketing.component";
import {OrderComponent} from "./components/admin-body/order/order.component";
import {ProductComponent} from "./components/admin-body/product/product.component";

const routes: Routes = [
	{
		path: "",
		component: AdminComponent,
		children: [
			{path: "index", component: IndexComponent },
			{path: "finance", component: FinanceComponent},
			{path: "home", component: HomeComponent},
			{path: "marketing", component: MarketingComponent},
			{path: "order", component: OrderComponent},
			{path: "product", component: ProductComponent}
		]
	},
	{
		path: "login",
		loadChildren: () => import("./modules/login/login.module").then((m) => m.LoginModule)
	},
	{
		path: "register",
		loadChildren: () => import("./modules/register/register.module").then((m) => m.RegisterModule)
	},
	{
		path:"ad", pathMatch:"full",
		loadChildren:()=>import("./components/page-not-found/page-not-found.component").then((m)=>m.PageNotFoundComponent)
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule {}
