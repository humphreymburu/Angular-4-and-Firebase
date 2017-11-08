import { ProfileComponent } from './profile.component';

export const routes = [
  { path: '', children: [
    { path: 'profile', component: ProfileComponent },
    { path: 'user', loadChildren: './profile.module#ProfileModule' }
  ]},
];
