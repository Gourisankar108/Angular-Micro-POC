import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'product',
  loadChildren: () => {
    return loadRemoteModule({
      remoteEntry: "http://localhost:4300/remoteEntry.js",
      remoteName: 'productApp',
      exposedModule: './ProductModule'
    }).then(m => m.ProductModule).catch(error =>
      console.log('Error=>', error));
  }
},

{
  path: 'post',
  loadChildren: () => {
    return loadRemoteModule({
      remoteEntry: "http://localhost:4500/remoteEntry.js",
      remoteName: 'postApp',
      exposedModule: './PostModule'
    }).then(m => m.PostModule).catch(error =>
      console.log('Error=>', error));
  }
},

// {
//   path: 'search',
//   // loadChildren:()=>import('searchApp/SearchModule').then(m=>m.SearchModule)
//   loadChildren: () => {
//     return loadRemoteModule({
//       remoteEntry: "http://localhost:4400/remoteEntry.js",
//       remoteName: 'searchApp',
//       exposedModule: './SearchModule'
//     }).then(m => m.SearchModule).catch(error =>
//       console.log('Error=>', error));
//   }
// }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
