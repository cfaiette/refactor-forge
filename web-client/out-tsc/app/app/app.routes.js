import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StatusComponent } from './pages/status/status.component';
import { ChallengeListComponent } from './pages/challenge-list/challenge-list.component';
import { RefactorComponent } from './pages/refactor/refactor.component';
export const routes = [
    { path: '', component: DashboardComponent },
    { path: 'status', component: StatusComponent },
    { path: 'challenges', component: ChallengeListComponent },
    { path: 'challenges/:id', component: RefactorComponent },
];
//# sourceMappingURL=app.routes.js.map