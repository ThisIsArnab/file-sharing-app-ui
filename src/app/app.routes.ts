import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./login/login.component').then(x => x.LoginComponent)
    },
    {
        path: 'upload',
        loadComponent: () => import('./file-upload/file-upload.component').then(x => x.FileUploadComponent)
    }
];
