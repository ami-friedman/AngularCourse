import { AuthorService } from './author.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { LikeComponent } from './like/like.component';
import { CaseComponent } from './case/case.component';
import { TitlecasePipe } from './titlecase.pipe';
import { ZippyComponent } from './zippy/zippy.component';
import { CourseFormComponent } from './course-form/course-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    LikeComponent,
    CaseComponent,
    TitlecasePipe,
    ZippyComponent,
    CourseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
