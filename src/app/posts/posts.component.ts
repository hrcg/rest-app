import { Component, OnInit } from "@angular/core";
import { PostsServiceService } from "../services/posts-service.service";
import { Post } from "../models/post";
import { MatDialog, MatSnackBar } from "@angular/material";
import { PostDialogComponent } from "./post-dialog/post-dialog.component";

@Component({
  selector: "app-users",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
})
export class PostsComponent implements OnInit {
  constructor(
    private postService: PostsServiceService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  postsList: Post[] = [];

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe((data) => {
      this.postsList = data;
    });
  }

  createPost() {
    this.openDialog();
  }

  updatePost(post: Post) {
    this.openDialog(post);
  }

  deletePost(post: Post) {
    this.postService.deletePost(post).subscribe(() => {
      this.snackBar.open(`Post with Id ${post.id} deleted.`, "", {
        horizontalPosition: "right",
        verticalPosition: "bottom",
        duration: 2000,
      });

      const index = this.postsList.indexOf(post);
      if (index > -1) {
        this.postsList.splice(index, 1);
      }
    });
  }

  openDialog(post?: Post): void {
    const dialogRef = this.dialog.open(PostDialogComponent, {
      width: "500px",
      height: "300px",
      data: { post },
    });

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        const index = this.postsList.indexOf(post);
        if (index > -1) {
          this.postsList.splice(index, 1, data);
        } else {
          this.postsList.unshift(data);
        }
      }
    });
  }
}
