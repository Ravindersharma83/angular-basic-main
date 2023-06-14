import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// for reactive form we have to import reactive form module and in .ts file import FormGroup,FormControl
import { ReactiveFormsModule } from '@angular/forms';
// importing custom created module
import {UserAuthModule} from './user-auth/user-auth.module'

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ChildComponent } from './child/child.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivesComponent } from './directives/directives.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { NgContentExampleComponent } from './ng-content-example/ng-content-example.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BasicFormComponent,
    ChildComponent,
    UsdInrPipe,
    PipeExampleComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    TodoListComponent,
    ParentComponentComponent,
    ServiceExampleComponent,
    FooterComponent,
    DirectivesComponent,
    TemplateReferenceVariableComponent,
    ViewChildComponent,
    NgContentExampleComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
