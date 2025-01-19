import { Routes } from '@angular/router';
import { AuthPage } from './pages/auth/auth.component';
import { PostComponent } from './pages/post/post.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        title: 'CRUD Page',
        component: HomeComponent
    },
    {
        path: 'posts',
        title: 'Post Control Page',
        component: PostComponent
    },
    {
        path: 'auth',
        title: 'auth page',
        component: AuthPage
    }
];
