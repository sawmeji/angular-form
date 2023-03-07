import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactivesComponent } from './pages/reactives/reactives.component';
import { GroupFormComponent } from './pages/template/group-form/group-form.component';
import { TemplateDataBindComponent } from './pages/template/template-data-bind/template-data-bind.component';
import { TemplateComponent } from './pages/template/template.component';
import { TopFormComponent } from './pages/template/top-form/top-form.component';

const routes: Routes = [
  {path: 'template', component: TemplateComponent, children: [
    {path: 'top', component: TopFormComponent},
    {path: 'group', component: GroupFormComponent},
    {path: 'bind', component: TemplateDataBindComponent},
    {path: '', redirectTo: '/template/top',pathMatch: 'full'}
  ]},
  {path: 'reactives', component: ReactivesComponent},
  {path: '', redirectTo: '/template/top', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
