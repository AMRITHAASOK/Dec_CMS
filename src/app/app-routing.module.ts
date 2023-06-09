import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
  {
    //localhost://4200
    path:'',redirectTo:'contact/admin',pathMatch:'full'
  },
  {
    //localhost://4200/contact/admin
    path:'contact/admin',component:ContactManagerComponent
  },
   //localhost://4200/contact/add
  {
    path:'contact/add',component:AddContactComponent
  },
   //localhost://4200/contact/update
  {

    path:'contact/update/:Id',component:UpdateContactComponent
  },
   //localhost://4200/contact/view
  {
    path:'contact/view/:contactId',component:ViewContactComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
