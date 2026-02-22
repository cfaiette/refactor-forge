import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="app-layout">
      <header class="app-header">
        <a routerLink="/" class="app-logo">RefactorForge</a>
        <nav class="app-nav">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
          <a routerLink="/challenges" routerLinkActive="active">Challenges</a>
          <a routerLink="/status" routerLinkActive="active">Status</a>
        </nav>
      </header>
      <main class="app-main">
        <router-outlet />
      </main>
      <footer class="app-footer">
        <span class="app-footer-text">RefactorForge</span>
        <a routerLink="/status" class="app-footer-link">System status</a>
      </footer>
    </div>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {}
