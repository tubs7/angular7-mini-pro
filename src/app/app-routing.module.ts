import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { TodoComponent } from './todo/todo.component';
import { FunComponent } from './fun/fun.component';
import { FilterComponent } from './filter/filter.component';
import { HistoryComponent } from './history/history.component';
import { DragComponent } from './drag/drag.component';
import { ParentComponent } from './io/parent/parent.component';
import { FormComponent } from './form/form.component';
import { ApiComponent } from './api/api.component';
import { ProgressComponent } from './progress/progress.component';
import { SwitchComponent } from'./switch/switch.component';
import { SearchComponent } from './search/search.component';
import { FileComponent } from './file/file.component';
import { TableComponent } from './table/table.component';
import { MailComponent } from './mail/mail.component';
import { PipeComponent } from './pipe/pipe.component';
import { HomeComponent } from './home/home.component';
import { ModalContainerComponent} from './modal-container/modal-container.component';
import { AllPostComponent } from './post/all-post/all-post.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PaginationComponent } from './pagination/pagination.component';
import { OneComponent } from './comm/one/one.component';
import { TwoComponent } from './comm/two/two.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component'
import { SimpleDirective } from './simple.directive'
import { ExampleComponent } from './example/example.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'oo',
    component: ExampleComponent
  },
  {
    path: 'simple',
    component: SimpleDirective
  },
  {
    path: 'data-binding',
    component: DataBindingComponent
  },
  {
    path: 'pagination',
    component:  PaginationComponent
  },
  {
    path: 'one',
    component:  OneComponent
  },
  {
    path: 'two',
    component:  TwoComponent
  },
  {
    path: 'reactiveForm',
    component:  ReactiveFormComponent
  },
  {
    path: 'post',
    component:  AllPostComponent
  },
  {
    path: 'modalCon',
    component:  ModalContainerComponent
  },
  {
    path: 'newFile',
    component: NewComponent
  },
  {
    path: 'array',
    component: PipeComponent
  },
  {
    path: 'mail',
    component: MailComponent
  },
  {
    path: 'file',
    component: FileComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'switch',
    component: SwitchComponent
  },
  {
    path: 'progress',
    component: ProgressComponent
  },
  {
    path: 'api',
    component: ApiComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'io',
    component: ParentComponent
  },
  {
    path: 'drag',
    component: DragComponent
  },
  {
    path: 'filter',
    component: FilterComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'loader',
    component: LoadingSpinnerComponent
  },
  {
    path: 'fun',
    component: FunComponent,
    data: { title: 'function' }
  },
  {
    path: 'history',
    component: HistoryComponent,
    data: { title: 'history' }
  }
  // { path: '',
  //   redirectTo: 'HomeComponent',
  //   pathMatch: 'full'
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
