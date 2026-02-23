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
      <p class="subtitle">Pick your path: jump into a random challenge or choose a sample challenge.</p>
      @if (loading()) {
        <p class="loading">Loading challenges…</p>
      } @else if (error()) {
        <p class="error-detail">{{ error() }}</p>
        <a routerLink="/status" class="status-hint">Check system status</a>
      } @else {
        <div class="path-grid">
          <section class="path-card">
            <h2>Random challenge</h2>
            <p class="path-copy">Start immediately with a random challenge from the current set.</p>
            <button
              type="button"
              class="primary-btn"
              (click)="startRandomChallenge()"
              [disabled]="challenges().length === 0"
            >
              Start random challenge
            </button>
            @if (challenges().length === 0) {
              <p class="card-note">No challenges available yet. Create one first.</p>
            }
          </section>
          <section class="path-card">
            <h2>Sample challenge</h2>
            <p class="path-copy">Pick a specific challenge from the list and open it directly.</p>
            @if (challenges().length === 0) {
              <p class="card-note">No sample challenges yet.</p>
            } @else {
              <label class="sample-label" for="sample-challenge-select">Available challenges</label>
              <select
                id="sample-challenge-select"
                class="sample-select"
                [value]="selectedChallengeId() ?? ''"
                (change)="onSampleSelected($event)"
              >
                @for (challenge of challenges(); track challenge.id) {
                  <option [value]="challenge.id">
                    {{ challenge.title }} ({{ challenge.expected_pattern }} · {{ challenge.difficulty }})
                  </option>
                }
              </select>
              <button type="button" class="secondary-btn" (click)="openSelectedChallenge()">
                Open sample challenge
              </button>
            }
          </section>
        </div>
        <div class="create-section">
          <button type="button" class="create-btn" (click)="openPatternPicker()">
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
      max-width: 980px;
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
    .path-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
    .path-card {
      background: #f8f9fb;
      border: 1px solid #e6e9ef;
      border-radius: 10px;
      padding: 1.1rem;
      min-height: 220px;
    }
    .path-card h2 {
      font-size: 1.1rem;
      margin: 0 0 0.5rem 0;
    }
    .path-copy {
      color: #555;
      margin: 0 0 1rem 0;
      font-size: 0.95rem;
    }
    .card-note {
      margin-top: 0.75rem;
      color: #666;
      font-size: 0.875rem;
    }
    .create-btn {
      padding: 0.625rem 1.25rem;
      font-size: 0.95rem;
      background: #0066cc;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
    .create-btn:hover {
      background: #0052a3;
    }
    .primary-btn, .secondary-btn {
      padding: 0.625rem 1rem;
      border-radius: 8px;
      font-size: 0.95rem;
      border: none;
      cursor: pointer;
    }
    .primary-btn {
      background: #0066cc;
      color: #fff;
    }
    .primary-btn:hover:not(:disabled) {
      background: #0052a3;
    }
    .secondary-btn {
      background: #eef3fa;
      color: #1f3d5a;
      border: 1px solid #c8d8ec;
      margin-top: 0.75rem;
    }
    .secondary-btn:hover:not(:disabled) {
      background: #e1ecf8;
    }
    .primary-btn:disabled, .secondary-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .sample-label {
      display: block;
      font-size: 0.875rem;
      margin-bottom: 0.4rem;
      color: #555;
    }
    .sample-select {
      width: 100%;
      padding: 0.6rem 0.7rem;
      border: 1px solid #cfd6e0;
      border-radius: 8px;
      background: #fff;
      font-size: 0.92rem;
    }
    .create-section {
      margin-top: 1.5rem;
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
    @media (max-width: 850px) {
      .path-grid {
        grid-template-columns: 1fr;
      }
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
  selectedChallengeId = signal<number | null>(null);

  constructor() {
    this.loadChallenges();
  }

  private loadChallenges(): void {
    this.loading.set(true);
    this.error.set(null);
    this.challengesService.list().subscribe({
      next: (list) => {
        this.challenges.set(list);
        const currentSelectedId = this.selectedChallengeId();
        if (list.length === 0) {
          this.selectedChallengeId.set(null);
        } else if (currentSelectedId == null || !list.some((c) => c.id === currentSelectedId)) {
          this.selectedChallengeId.set(list[0].id);
        }
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

  startRandomChallenge(): void {
    const list = this.challenges();
    if (list.length === 0) return;
    const randomIndex = Math.floor(Math.random() * list.length);
    this.router.navigate(['/challenges', list[randomIndex].id], {
      queryParams: { mode: 'random' },
    });
  }

  onSampleSelected(event: Event): void {
    const target = event.target as HTMLSelectElement | null;
    if (!target) return;
    const id = Number(target.value);
    if (!Number.isNaN(id)) {
      this.selectedChallengeId.set(id);
    }
  }

  openSelectedChallenge(): void {
    const id = this.selectedChallengeId();
    if (id == null) return;
    this.router.navigate(['/challenges', id], {
      queryParams: {},
    });
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
