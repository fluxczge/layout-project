import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { CommentComponent } from './comment/comment.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  { path: 'button', component: ButtonComponent},
  { path: 'form', component: FormComponent},
  { path: 'comment', component: CommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
