import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="dashboard">
      <header class="dashboard-header">
        <h1>RefactorForge</h1>
        <p class="tagline">Practice refactoring with design patterns</p>
      </header>
      <main class="dashboard-main">
        <section class="hero">
          <p class="hero-text">
            Refactor small, messy code samples and get instant feedback. Choose a pattern, improve the code, and submit for evaluation.
          </p>
          <a routerLink="/challenges" class="cta-button">Browse challenges</a>
        </section>
        <section class="links">
          <a routerLink="/challenges" class="card">
            <span class="card-title">Challenges</span>
            <span class="card-desc">Select a pattern to implement and start refactoring</span>
          </a>
          <a routerLink="/status" class="card card-muted">
            <span class="card-title">System status</span>
            <span class="card-desc">Check backend and frontend connectivity</span>
          </a>
        </section>
      </main>
    </div>
  `,
  styles: [`
    .dashboard {
      font-family: system-ui, sans-serif;
      max-width: 640px;
      margin: 0 auto;
      padding: 2rem 1.5rem;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .dashboard-header {
      margin-bottom: 2rem;
    }
    .dashboard-header h1 {
      font-size: 2rem;
      font-weight: 700;
      margin: 0 0 0.25rem 0;
      letter-spacing: -0.02em;
    }
    .tagline {
      color: #666;
      font-size: 1rem;
      margin: 0;
    }
    .dashboard-main {
      flex: 1;
    }
    .hero {
      background: #f5f5f5;
      border-radius: 12px;
      padding: 1.5rem;
      margin-bottom: 2rem;
    }
    .hero-text {
      margin: 0 0 1.25rem 0;
      line-height: 1.5;
      color: #333;
    }
    .cta-button {
      display: inline-block;
      padding: 0.625rem 1.25rem;
      background: #0066cc;
      color: white;
      text-decoration: none;
      font-weight: 500;
      border-radius: 8px;
    }
    .cta-button:hover {
      background: #0052a3;
    }
    .links {
      display: grid;
      gap: 1rem;
    }
    .card {
      display: block;
      padding: 1rem 1.25rem;
      border: 1px solid #e0e0e0;
      border-radius: 10px;
      text-decoration: none;
      color: inherit;
      transition: border-color 0.15s, background 0.15s;
    }
    .card:hover {
      border-color: #0066cc;
      background: #fafafa;
    }
    .card-muted {
      border-color: #eee;
    }
    .card-muted .card-desc {
      color: #888;
    }
    .card-title {
      display: block;
      font-weight: 600;
      margin-bottom: 0.25rem;
    }
    .card-desc {
      font-size: 0.875rem;
      color: #666;
      margin: 0;
    }
  `],
})
export class DashboardComponent {}
