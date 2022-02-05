import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { PostsServiceService } from 'src/app/services/posts-service.service';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css']
})
export class PostDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<PostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private postsService: PostsServiceService, private snackBar: MatSnackBar) { }

  postForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
    userId: new FormControl(1),
    id: new FormControl()
  });

  ngOnInit() {
    if (this.data.post) {
      this.postForm.patchValue(this.data.post)
    }
  }

  createPost() {
    this.postsService.createPost(this.postForm.value).subscribe(data => {
      this.closeDialog(data);
      this.snackBar.open(`Post created`, '', {
        horizontalPosition: "right",
        verticalPosition: "bottom",
        duration: 2000
      })
    }, error => {
      console.log(error);
    })
  }

  updatePost() {
    this.postsService.updatePost(this.postForm.value).subscribe(data => {
      console.log(data);
      this.closeDialog(data);
      this.snackBar.open(`Post updated`, '', {
        horizontalPosition: "right",
        verticalPosition: "bottom",
        duration: 2000
      })
    }, error => {
      console.log(error);
    })
  }

  closeDialog(data?: any) {
    this.dialogRef.close(data);
  }

}
