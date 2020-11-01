import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DropzoneModule } from 'ngx-dropzone-wrapper';    
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';    
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';  
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { NewComponent } from './new/new.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FunComponent } from './fun/fun.component';
import { FilterComponent } from './filter/filter.component';
import { HistoryComponent } from './history/history.component';
import { DragComponent } from './drag/drag.component';
import { ParentComponent } from './io/parent/parent.component';
import { ChildComponent } from './io/child/child.component';
import { FormComponent } from './form/form.component';
import { ApiComponent } from './api/api.component';
import { HttpClientModule } from '@angular/common/http';
import { ProgressComponent } from './progress/progress.component';
import { NgProgressModule } from 'ngx-progressbar';
import { DataService } from './services/data.service';
import { SwitchComponent } from './switch/switch.component';
import { SearchComponent } from './search/search.component';
import { FilterPipeComponent } from './search/filter-pipe.component';
import { FileComponent } from './file/file.component';
import { TableComponent } from './table/table.component';
import { MailComponent } from './mail/mail.component';
import { PipeComponent } from './pipe/pipe.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TagInputModule } from 'ngx-chips';
import { NgxAutoScrollModule } from "ngx-auto-scroll";

import { ModalContainerComponent } from './modal-container/modal-container.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { AddNewPostComponent } from './post/add-new-post/add-new-post.component';
import { DeletePostComponent } from './post/delete-post/delete-post.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { AllPostComponent } from './post/all-post/all-post.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { BlogService } from './services/blog.service.service';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationComponent } from './pagination/pagination.component';
import { OneComponent } from './comm/one/one.component';
import { TwoComponent } from './comm/two/two.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SimpleDirective } from './simple.directive';
import { ExampleComponent } from './example/example.component';

const DROPZONECONFIG: DropzoneConfigInterface = {    
    
  url: 'http://localhost:4200/drag',    
  maxFilesize: 100,    
  acceptedFiles: 'image/jpg,image/png,image/jpeg/*'    
    
};  

@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent,
    NewComponent,
    TodoComponent,
    FunComponent,
    FilterComponent,
    HistoryComponent,
    DragComponent,
    ParentComponent,
    ChildComponent,
    FormComponent,
    ApiComponent,
    ProgressComponent,
    SwitchComponent,
    SearchComponent,
    FilterPipeComponent,
    FileComponent,
    TableComponent,
    MailComponent,
    PipeComponent,
    HomeComponent,
    ModalContainerComponent,
    ModalContentComponent,
    AddNewPostComponent,
    DeletePostComponent,
    EditPostComponent,
    AllPostComponent,
    ReactiveFormComponent,
    PaginationComponent,
    OneComponent,
    TwoComponent,
    DataBindingComponent,
    SimpleDirective,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgProgressModule,
    NgbModule,
    ModalModule.forRoot(),
    NgxPaginationModule,
    NgxSpinnerModule,
    DropzoneModule,
    TagInputModule,
    NgxAutoScrollModule 
  ],
  providers: [    
    {    
      provide: DROPZONE_CONFIG,    
      useValue: DROPZONECONFIG
    },    
    DataService, BlogService, BsModalService
  ],
  // providers: [DataService, BlogService, BsModalService],
  bootstrap: [AppComponent],
  entryComponents: [ ModalContentComponent, TableComponent, AddNewPostComponent, DeletePostComponent, EditPostComponent ]
})
export class AppModule { }
