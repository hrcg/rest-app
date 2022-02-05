import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PostsComponent } from "./posts/posts.component";
import { AppRoutingModule } from "./app-routing.module";
import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
} from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PostDialogComponent } from "./posts/post-dialog/post-dialog.component";
import { ReactiveFormsModule } from "@angular/forms";
import {
  MatSnackBar,
  MatSnackBarModule,
  MAT_DIALOG_DATA,
} from "@angular/material";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [AppComponent, PostsComponent, PostDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [
    HttpClientModule,
    PostDialogComponent,
    { provide: MAT_DIALOG_DATA, useValue: [] },
    MatSnackBar,
  ],
  entryComponents: [PostDialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
