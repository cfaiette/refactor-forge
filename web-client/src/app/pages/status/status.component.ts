import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';

interface StatusResponse {
  status: string;
  service?: string;
}

@Component({
  selector: 'app-status',
  standalone: true,
  template: `
    <div class="status-page">
      <h1>RefactorForge Status</h1>
      <a routerLink="/" class="nav-link">← Back to dashboard</a>
      <ul class="status-list">
        <li class="status-item frontend">
          <span class="label">Frontend</span>
          <span class="badge ok">OK</span>
        </li>
        <li class="status-item backend">
          <span class="label">Backend</span>
          @if (backendStatus() === 'loading') {
            <span class="badge loading">Checking…</span>
          } @else if (backendStatus() === 'ok') {
            <span class="badge ok">OK</span>
          } @else {
            <span class="badge error">Error</span>
          }
        </li>
      </ul>
      @if (backendError()) {
        <p class="error-detail">{{ backendError() }}</p>
      }
    </div>
  `,
  styles: [`
    .status-page {
      font-family: system-ui, sans-serif;
      max-width: 360px;
      margin: 3rem auto;
      padding: 1.5rem;
    }
    h1 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
    .nav-link {
      display: inline-block;
      margin-bottom: 1.5rem;
      color: #0066cc;
      text-decoration: none;
    }
    .nav-link:hover {
      text-decoration: underline;
    }
    .status-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .status-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 1rem;
      margin-bottom: 0.5rem;
      background: #f5f5f5;
      border-radius: 8px;
    }
    .label {
      font-weight: 500;
    }
    .badge {
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.875rem;
    }
    .badge.ok {
      background: #d4edda;
      color: #155724;
    }
    .badge.loading {
      background: #fff3cd;
      color: #856404;
    }
    .badge.error {
      background: #f8d7da;
      color: #721c24;
    }
    .error-detail {
      margin-top: 1rem;
      font-size: 0.875rem;
      color: #721c24;
    }
  `],
})
export class StatusComponent {
  private http = inject(HttpClient);

  backendStatus = signal<'loading' | 'ok' | 'error'>('loading');
  backendError = signal<string | null>(null);

  constructor() {
    this.checkBackend();
  }

  private formatBackendError(err: { status?: number; message?: string; error?: unknown }): string {
    if (err?.status === 0) {
      return `Backend unreachable at ${environment.apiUrl}. Start it with: docker compose up (or php artisan serve in backend/)`;
    }
    const body = err?.error as { message?: string } | undefined;
    return body?.message ?? err?.message ?? (err?.status != null ? String(err.status) : 'Request failed');
  }

  private checkBackend(): void {
    const url = `${environment.apiUrl}/api/status`;
    this.http.get<StatusResponse>(url).subscribe({
      next: () => this.backendStatus.set('ok'),
      error: (err) => {
        this.backendStatus.set('error');
        const msg = this.formatBackendError(err);
        this.backendError.set(msg);
      },
    });
  }
}
