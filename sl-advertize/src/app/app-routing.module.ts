import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, ParamMap  } from '@angular/router';

import { PostAdComponent } from './post-ad/post-ad.component';
import { HomeComponent } from './home/home.component';
import {UserProfileComponent} from './user-profile/user-profile.component'
import {SelectPlanComponent} from './select-plan/select-plan.component'

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'post-new-ad/:id', component: PostAdComponent },
  { path: 'select-plan', component: SelectPlanComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
