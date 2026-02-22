import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ChallengesService } from '../../services/challenges.service';
import { PatternsService } from '../../services/patterns.service';
import type { ChallengeListItem, PatternListItem } from '../../models/api.types';

@Component({
  selector: 'app-challenge-list',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="challenge-list-page">
      <h1>Challenges</h1>
      <p class="subtitle">Choose a pattern to implement</p>
      @if (loading()) {
        <p class="loading">Loading challenges…</p>
      } @else if (error()) {
        <p class="error-detail">{{ error() }}</p>
        <a routerLink="/status" class="status-hint">Check system status</a>
      } @else if (challenges().length === 0) {
        <div class="empty-state">
          <p class="empty-message">No challenges yet.</p>
          <p class="empty-hint">Create a challenge by choosing a design pattern.</p>
          @if (!showPatternPicker()) {
            <button type="button" class="create-btn" (click)="openPatternPicker()">
              Create challenge
            </button>
          } @else {
            <div class="pattern-picker">
              <p class="picker-label">Select a pattern</p>
              @if (patternsLoading()) {
                <p class="loading">Loading patterns…</p>
              } @else if (patternsError()) {
                <p class="error-detail">{{ patternsError() }}</p>
                <p class="error-hint">Ensure the backend is running and the patterns API is available (GET /api/patterns).</p>
              } @else if (patterns().length === 0) {
                <p class="empty-patterns-message">No patterns available.</p>
                <p class="empty-patterns-hint">Seed the backend database to add design patterns. In the backend directory run: <code>php artisan db:seed</code></p>
              } @else {
                <ul class="pattern-list">
                  @for (pattern of patterns(); track pattern.id) {
                    <li class="pattern-item">
                      <button
                        type="button"
                        class="pattern-btn"
                        (click)="createChallenge(pattern)"
                        [disabled]="creating()"
                      >
                        {{ pattern.name }}
                        @if (creating()) {
                          <span class="creating-label">Creating…</span>
                        }
                      </button>
                    </li>
                  }
                </ul>
              }
              <button type="button" class="cancel-btn" (click)="showPatternPicker.set(false)">
                Cancel
              </button>
            </div>
          }
        </div>
      } @else {
        <ul class="challenge-list">
          @for (challenge of challenges(); track challenge.id) {
            <li class="challenge-item">
              <a [routerLink]="['/challenges', challenge.id]" class="challenge-link">
                <span class="challenge-title">{{ challenge.title }}</span>
                <span class="challenge-meta">
                  {{ challenge.expected_pattern }} · {{ challenge.difficulty }}
                </span>
              </a>
            </li>
          }
        </ul>
        <div class="create-section">
          <button type="button" class="create-btn create-btn-secondary" (click)="openPatternPicker()">
            Create challenge
          </button>
        </div>
        @if (showPatternPicker()) {
          <div class="pattern-picker pattern-picker-overlay">
            <p class="picker-label">Select a pattern for your new challenge</p>
            @if (patternsLoading()) {
              <p class="loading">Loading patterns…</p>
            } @else if (patternsError()) {
              <p class="error-detail">{{ patternsError() }}</p>
              <p class="error-hint">Ensure the backend is running and the patterns API is available (GET /api/patterns).</p>
            } @else if (patterns().length === 0) {
              <p class="empty-patterns-message">No patterns available.</p>
              <p class="empty-patterns-hint">Seed the backend database: <code>php artisan db:seed</code></p>
            } @else {
              <ul class="pattern-list">
                @for (pattern of patterns(); track pattern.id) {
                  <li class="pattern-item">
                    <button
                      type="button"
                      class="pattern-btn"
                      (click)="createChallenge(pattern)"
                      [disabled]="creating()"
                    >
                      {{ pattern.name }}
                      @if (creating()) {
                        <span class="creating-label">Creating…</span>
                      }
                    </button>
                  </li>
                }
              </ul>
            }
            @if (createError()) {
              <p class="error-detail">{{ createError() }}</p>
            }
            <button type="button" class="cancel-btn" (click)="closePatternPicker()">
              Cancel
            </button>
          </div>
        }
      }
    </div>
  `,
  styles: [`
    .challenge-list-page {
      font-family: system-ui, sans-serif;
      max-width: 560px;
      margin: 3rem auto;
      padding: 1.5rem;
    }
    h1 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
    .subtitle {
      color: #666;
      margin-bottom: 1.5rem;
    }
    .loading, .error-detail {
      margin-top: 1rem;
    }
    .error-detail {
      color: #721c24;
    }
    .status-hint {
      display: inline-block;
      margin-top: 0.5rem;
      font-size: 0.875rem;
      color: #0066cc;
      text-decoration: none;
    }
    .status-hint:hover {
      text-decoration: underline;
    }
    .empty-state {
      padding: 2rem 0;
      text-align: center;
    }
    .empty-message {
      font-weight: 500;
      margin: 0 0 0.25rem 0;
    }
    .empty-hint {
      color: #666;
      font-size: 0.9375rem;
      margin: 0 0 1.25rem 0;
    }
    .create-btn {
      padding: 0.625rem 1.25rem;
      font-size: 1rem;
      background: #0066cc;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
    .create-btn:hover {
      background: #0052a3;
    }
    .create-section {
      margin-top: 1.5rem;
    }
    .create-btn-secondary {
      background: #f5f5f5;
      color: #333;
      border: 1px solid #ddd;
    }
    .create-btn-secondary:hover {
      background: #eee;
    }
    .pattern-picker {
      margin-top: 1.5rem;
      padding: 1.25rem;
      background: #f9f9f9;
      border-radius: 10px;
      border: 1px solid #eee;
    }
    .pattern-picker-overlay {
      margin-top: 1rem;
    }
    .picker-label {
      font-weight: 500;
      margin: 0 0 0.75rem 0;
      font-size: 0.9375rem;
    }
    .pattern-list {
      list-style: none;
      padding: 0;
      margin: 0 0 1rem 0;
    }
    .pattern-item {
      margin-bottom: 0.5rem;
    }
    .pattern-btn {
      display: block;
      width: 100%;
      padding: 0.6rem 1rem;
      text-align: left;
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.9375rem;
    }
    .pattern-btn:hover:not(:disabled) {
      background: #f5f5f5;
      border-color: #0066cc;
    }
    .pattern-btn:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
    .creating-label {
      margin-left: 0.5rem;
      color: #666;
      font-size: 0.875rem;
    }
    .cancel-btn {
      padding: 0.4rem 0.75rem;
      font-size: 0.875rem;
      background: transparent;
      border: 1px solid #ccc;
      border-radius: 6px;
      cursor: pointer;
    }
    .cancel-btn:hover {
      background: #f0f0f0;
    }
    .error-hint, .empty-patterns-hint {
      font-size: 0.875rem;
      color: #666;
      margin: 0.5rem 0 0 0;
    }
    .empty-patterns-message {
      font-weight: 500;
      margin: 0 0 0.25rem 0;
    }
    .empty-patterns-hint code {
      background: #eee;
      padding: 0.15rem 0.4rem;
      border-radius: 4px;
      font-size: 0.8125rem;
    }
    .challenge-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .challenge-item {
      margin-bottom: 0.5rem;
    }
    .challenge-link {
      display: block;
      padding: 0.75rem 1rem;
      background: #f5f5f5;
      border-radius: 8px;
      text-decoration: none;
      color: inherit;
    }
    .challenge-link:hover {
      background: #eee;
    }
    .challenge-title {
      font-weight: 500;
      display: block;
    }
    .challenge-meta {
      font-size: 0.875rem;
      color: #666;
    }
  `],
})
export class ChallengeListComponent {
  private challengesService = inject(ChallengesService);
  private patternsService = inject(PatternsService);
  private router = inject(Router);

  challenges = signal<ChallengeListItem[]>([]);
  loading = signal(true);
  error = signal<string | null>(null);
  showPatternPicker = signal(false);
  patterns = signal<PatternListItem[]>([]);
  patternsLoading = signal(false);
  patternsError = signal<string | null>(null);
  creating = signal(false);
  createError = signal<string | null>(null);

  constructor() {
    this.loadChallenges();
  }

  private loadChallenges(): void {
    this.loading.set(true);
    this.error.set(null);
    this.challengesService.list().subscribe({
      next: (list) => {
        this.challenges.set(list);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        const msg = (err?.error as { message?: string })?.message ?? err?.message ?? 'Failed to load challenges. Ensure the backend is running.';
        this.error.set(msg);
      },
    });
  }

  openPatternPicker(): void {
    this.showPatternPicker.set(true);
    this.patternsError.set(null);
    this.createError.set(null);
    this.patternsLoading.set(true);
    this.patternsService.list().subscribe({
      next: (list) => {
        this.patterns.set(list);
        this.patternsLoading.set(false);
      },
      error: (err) => {
        this.patternsLoading.set(false);
        const msg = (err?.error as { message?: string })?.message ?? err?.message ?? 'Failed to load patterns';
        this.patternsError.set(msg);
      },
    });
  }

  closePatternPicker(): void {
    this.showPatternPicker.set(false);
    this.patternsError.set(null);
    this.createError.set(null);
  }

  createChallenge(pattern: PatternListItem): void {
    this.creating.set(true);
    this.createError.set(null);
    this.challengesService.create(pattern.id).subscribe({
      next: (challenge) => {
        this.creating.set(false);
        this.closePatternPicker();
        this.loadChallenges();
        this.router.navigate(['/challenges', challenge.id]);
      },
      error: (err) => {
        this.creating.set(false);
        const msg = (err?.error as { message?: string })?.message ?? err?.message ?? 'Failed to create challenge';
        this.createError.set(msg);
      },
    });
  }
}
