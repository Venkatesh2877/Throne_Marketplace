import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ArtistListComponent } from './pages/super-admin/artist-list/artist-list.component';
// import { CategoriesComponent } from './pages/super-admin/categories/categories.component';
// import { DashboardComponentComponent } from './pages/super-admin/dashboard-component/dashboard-component.component';
// import { FeesComponent } from './pages/super-admin/fees/fees.component';
// import { ListUsersComponentComponent } from './pages/super-admin/list-users-component/list-users-component.component';
// import { ReportUsersComponent } from './pages/super-admin/report-users/report-users.component';
// import { TransactionsComponent } from './pages/super-admin/transactions/transactions.component';


const routes: Routes = [

  {
    path: "creator", loadChildren: "./pages/components/crypto-creator/crypto-creator.module#CryptoCreatorModule",

  },
  {
    path: "admin", loadChildren: "./pages/components/crypto-admin/crypto-admin.module#CryptoAdminModule",

  },
  {
    path: "", loadChildren: "./pages/components/crypto-fan/crypto-fan.module#CryptoFanModule",

  },

  // { path: 'admindashboard', component: DashboardComponentComponent },
  // { path: 'user/listUsers', component: ListUsersComponentComponent },
  // { path: 'user/reportUsers', component: ReportUsersComponent },
  // { path: 'artist/listArtists', component: ArtistListComponent },
  // { path: 'categories', component: CategoriesComponent },
  // { path: 'fees', component: FeesComponent },
  // { path: 'transactions', component: TransactionsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

  static COMPONENTS = [

  ];
}
