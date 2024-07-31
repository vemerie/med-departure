import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';
import { Post } from '../../interfaces/dashboard';
import { SharedModule } from '../../../core/shared/shared.module';
import { LoaderComponent } from '../../../core/shared/loader/loader.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [SharedModule, LoaderComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  @Input() item!: Post;
  public postForm: FormGroup = new FormGroup({});
  public loading: boolean = false;

  constructor(
    private dashboardService: DashboardService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  public initForm() {
    this.postForm = this.formBuilder.group({
      title: [this.item?.title, Validators.required],
      body: [this.item?.body, Validators.required],
    });
  }

  public onSubmit(post: FormGroup) {
    const value = post.value;
    if (this.item.id) {
      this.updatePost(value);
    } else {
      this.createPost(value);
    }
  }

  updatePost(post: Post) {
    this.loading = true;
    this.dashboardService.createPost(post).subscribe((res) => {
      if (res) {
        this.loading = false;
      }
    });
  }

  createPost(post: Post) {
    this.loading = true;
    this.dashboardService.updatePost(post).subscribe((res) => {
      if (res) {
        this.loading = false;
      }
    });
  }
}
