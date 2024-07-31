import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Post } from '../../interfaces/dashboard';
import { resolve } from 'path';
import { SharedModule } from '../../../core/shared/shared.module';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [SharedModule, CreateComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  itemIdToEdit!: number;
  openEdit: boolean = false;
  public loading: boolean = false;

  constructor(private dashboardService: DashboardService) {
    this.getAllPosts();
  }
  posts: Post[] = [];

  getAllPosts() {
    this.dashboardService.getAllPost();
    this.dashboardService.currentPost.subscribe(res=>{
      this.posts = res
    })
  }

  edit(id: number) {
    this.itemIdToEdit = id;
    this.openEdit = !this.openEdit;
  }

  remove(id: number) {
    this.loading = true;
    this.dashboardService.deletePost(id).subscribe((res) => {
      if (res) {
        this.loading = false;
      }
    });
  }
}
