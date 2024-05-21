import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './features/student-list/student-list.component';
import { AddStudentComponent } from './features/add-student/add-student.component';
import { EditStudentComponent } from './features/edit-student/edit-student.component';

const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
