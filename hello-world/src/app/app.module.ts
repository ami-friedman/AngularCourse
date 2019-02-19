import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { AuthorService } from './author.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { LikeComponent } from './like/like.component';
import { CaseComponent } from './case/case.component';
import { TitlecasePipe } from './titlecase.pipe';
import { ZippyComponent } from './zippy/zippy.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PasswordChangerComponent } from './password-changer/password-changer.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    SignupFormComponent,
    LikeComponent,
    CaseComponent,
    TitlecasePipe,
    ZippyComponent,
    CourseFormComponent,
    NewCourseFormComponent,
    PasswordChangerComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthorService,
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
