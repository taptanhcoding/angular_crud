import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './pages/post/post.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
template:`<router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'crud_sv';
}
