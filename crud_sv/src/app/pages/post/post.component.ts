import { Component, inject } from '@angular/core';
import { Post, PostService } from './post.service';
import { CommonModule } from '@angular/common';
import { DoCheck } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements DoCheck {
  posts: Post[] = [];
  newPost: Post = { title: '', views: 0 };
  postService = inject(PostService);
  show = {
    data: {title: '',id:null},
    open: false
  }

  constructor() {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }
  ngDoCheck():void {
  }

  showModal(data:any,open:boolean) {
    if(!data) data= {title:""}
    this.show = {data,open}
    
  }

  delPost(id:any){
    this.postService.deletePost(id).subscribe(() => {
      this.loadPosts()
    })
  }

  onSubmit(form: any): void {
    if(this.show.data?.id){
      this.postService.updatePost(this.show.data.id,{...form.value,views:0}).subscribe(() => {
        this.loadPosts()
      })
    }else{
      this.postService.addPost(form.value).subscribe(() => {
        this.loadPosts()
      })

    }
    this.showModal(null,false)

  }
}
