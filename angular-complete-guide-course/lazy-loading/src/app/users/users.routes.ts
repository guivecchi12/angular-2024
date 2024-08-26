import { Routes } from '@angular/router';

import { resolveUserTasks } from '../tasks/tasks.component';
import {
  NewTaskComponent,
  canLeaveEditPage,
} from '../tasks/new-task/new-task.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
    children: [
      {
        path: 'tasks', // <your-domain>/users/<uid>/tasks
        loadComponent: () =>
          import('../tasks/tasks.component').then(
            (module) => module.TasksComponent
          ),
        runGuardsAndResolvers: 'always',
        resolve: {
          userTasks: resolveUserTasks,
        },
      },
      {
        path: 'tasks/new',
        component: NewTaskComponent,
        canDeactivate: [canLeaveEditPage],
      },
    ],
  },
];
