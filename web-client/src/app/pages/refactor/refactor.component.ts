import { Component, inject, signal, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditorComponent } from 'ngx-monaco-editor-v2';
import { ChallengesService } from '../../services/challenges.service';
import { AttemptsService } from '../../services/attempts.service';
import { PatternsService } from '../../services/patterns.service';
import type { Challenge, PatternReveal } from '../../models/api.types';

@Component({
  selector: 'app-refactor',
  standalone: true,
  imports: [RouterLink, FormsModule, EditorComponent],
  template: `
    <div class="refactor-page">
      <header class="refactor-header">
        <a routerLink="/challenges" class="back-link">← Challenges</a>
        @if (challenge()) {
          <h1>{{ displayTitle() }}</h1>
        }
      </header>
      @if (loadError()) {
        <p class="error-detail">{{ loadError() }}</p>
      } @else if (loading()) {
        <p class="loading">Loading challenge…</p>
      } @else if (challenge()) {
        <div class="editors-row">
          <div class="editor-pane">
            <label class="pane-label">Original code (read-only)</label>
            <div class="monaco-wrapper">
              <ngx-monaco-editor
                [options]="readOnlyOptions()"
                [model]="readOnlyModel()"
              />
            </div>
          </div>
          <div class="editor-pane">
            <label class="pane-label">Your solution</label>
            <div class="monaco-wrapper">
              <ngx-monaco-editor
                [options]="editableOptions()"
                [model]="editableModel"
                [(ngModel)]="solutionCode"
              />
            </div>
          </div>
        </div>
        <div class="actions">
          <div class="actions-left">
            <button class="generate-btn" (click)="generateExample()" [disabled]="generatingExample() || submitting()">
              {{ generatingExample() ? 'Generating…' : 'Regenerate Example' }}
            </button>
          </div>
          <div class="actions-right">
            <button class="hint-btn" (click)="toggleHint()">
              {{ showHint() ? 'Hide hint' : 'Hint' }}
            </button>
            <button
              class="reveal-btn"
              (click)="revealPattern()"
              [disabled]="revealLoading() || !!revealedPattern()"
            >
              {{ revealLoading() ? 'Loading…' : revealedPattern() ? 'Pattern revealed' : 'Reveal pattern' }}
            </button>
            <button class="submit-btn submit-btn-right" (click)="submit()" [disabled]="submitting()">
              {{ submitting() ? 'Submitting…' : 'Submit' }}
            </button>
          </div>
        </div>
        @if (showHint()) {
          <div class="hint-panel">
            {{ currentHint() }}
          </div>
        }
        @if (generateError()) {
          <p class="error-detail">{{ generateError() }}</p>
        }
        @if (revealedPattern(); as pattern) {
          <div class="reveal-panel">
            <h2>{{ pattern.name }}</h2>
            <p class="reveal-label">Intent</p>
            <p class="reveal-text">{{ pattern.intent }}</p>
            <p class="reveal-label">When to use</p>
            <p class="reveal-text">{{ pattern.when_to_use }}</p>
            <p class="reveal-label">Example solution</p>
            <pre class="reveal-code">{{ pattern.example_solution }}</pre>
          </div>
        }
        @if (result()) {
          <div class="results-panel">
            <h2>Result</h2>
            <p class="score">Score: {{ result()!.score }}%</p>
            <p class="feedback">{{ result()!.feedback }}</p>
          </div>
        }
      }
    </div>
  `,
  styles: [`
    .refactor-page {
      font-family: system-ui, sans-serif;
      padding: 1rem;
      max-width: 1400px;
      margin: 0 auto;
    }
    .refactor-header {
      margin-bottom: 1rem;
    }
    .back-link {
      display: inline-block;
      margin-bottom: 0.5rem;
      color: #0066cc;
      text-decoration: none;
    }
    .back-link:hover {
      text-decoration: underline;
    }
    .refactor-header h1 {
      font-size: 1.25rem;
      margin: 0;
    }
    .error-detail, .loading {
      color: #721c24;
    }
    .editors-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      min-height: 400px;
    }
    @media (max-width: 768px) {
      .editors-row {
        grid-template-columns: 1fr;
      }
    }
    .editor-pane {
      display: flex;
      flex-direction: column;
      border: 1px solid #ddd;
      border-radius: 8px;
      overflow: hidden;
    }
    .pane-label {
      padding: 0.5rem 0.75rem;
      background: #f5f5f5;
      font-size: 0.875rem;
      font-weight: 500;
      margin: 0;
    }
    .monaco-wrapper {
      flex: 1;
      height: 360px;
      min-height: 360px;
    }
    .monaco-wrapper ngx-monaco-editor {
      display: block;
      height: 100%;
    }
    .monaco-wrapper ::ng-deep .monaco-editor {
      height: 360px;
      min-height: 360px;
    }
    .actions {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
    }
    .actions-left {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-wrap: wrap;
      flex: 1;
    }
    .actions-right {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-wrap: wrap;
      justify-content: flex-start;
      flex: 1;
    }
    .submit-btn {
      padding: 0.5rem 1.25rem;
      font-size: 1rem;
      background: #0066cc;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
    .submit-btn:hover:not(:disabled) {
      background: #0052a3;
    }
    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .submit-btn-right {
      margin-left: auto;
    }
    .generate-btn {
      padding: 0.5rem 1rem;
      margin-right: 0.5rem;
      font-size: 0.95rem;
      background: #f5f5f5;
      color: #333;
      border: 1px solid #ddd;
      border-radius: 6px;
      cursor: pointer;
    }
    .generate-btn:hover:not(:disabled) {
      background: #ececec;
    }
    .generate-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .hint-btn {
      padding: 0.5rem 1rem;
      font-size: 0.95rem;
      background: #f5f5f5;
      color: #333;
      border: 1px solid #ddd;
      border-radius: 6px;
      cursor: pointer;
    }
    .hint-btn:hover {
      background: #ececec;
    }
    .reveal-btn {
      padding: 0.5rem 1rem;
      font-size: 0.95rem;
      background: #f5f5f5;
      color: #333;
      border: 1px solid #ddd;
      border-radius: 6px;
      cursor: pointer;
    }
    .reveal-btn:hover:not(:disabled) {
      background: #ececec;
    }
    .reveal-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .hint-panel {
      margin-top: 0.75rem;
      padding: 0.75rem 0.9rem;
      background: #fff8e8;
      border: 1px solid #f0d79a;
      border-radius: 8px;
      color: #5f4708;
      font-size: 0.95rem;
    }
    @media (max-width: 768px) {
      .actions {
        align-items: flex-start;
      }
      .actions-right {
        justify-content: flex-start;
      }
    }
    .results-panel {
      margin-top: 1.5rem;
      padding: 1rem;
      background: #f5f5f5;
      border-radius: 8px;
    }
    .results-panel h2 {
      font-size: 1rem;
      margin: 0 0 0.5rem 0;
    }
    .results-panel .score {
      font-weight: 500;
      margin: 0 0 0.5rem 0;
    }
    .results-panel .feedback {
      margin: 0;
      white-space: pre-wrap;
    }
  `],
})
export class RefactorComponent {
  private route = inject(ActivatedRoute);
  private challengesService = inject(ChallengesService);
  private attemptsService = inject(AttemptsService);
  private patternsService = inject(PatternsService);

  challenge = signal<Challenge | null>(null);
  loadError = signal<string | null>(null);
  loading = signal(true);
  solutionCode = '';
  submitting = signal(false);
  result = signal<{ score: number; feedback: string } | null>(null);
  revealedPattern = signal<PatternReveal | null>(null);
  revealLoading = signal(false);
  generatingExample = signal(false);
  generateError = signal<string | null>(null);
  showHint = signal(false);
  isMysteryPattern = signal(this.route.snapshot.queryParamMap.get('mode') === 'random');

  private challengeId = computed(() => {
    const id = this.route.snapshot.paramMap.get('id');
    return id ? parseInt(id, 10) : null;
  });
  displayTitle = computed(() => (this.isMysteryPattern() ? 'Mystery Pattern' : this.challenge()?.title ?? ''));

  readOnlyModel = computed(() => {
    const c = this.challenge();
    if (!c) return { value: '', language: 'php' };
    return { value: c.messy_code, language: c.language };
  });

  get editableModel(): { value: string; language: string } {
    const c = this.challenge();
    return {
      value: this.solutionCode,
      language: c?.language ?? 'php',
    };
  }

  readOnlyOptions = computed(() => {
    const c = this.challenge();
    return {
      theme: 'vs',
      language: c?.language ?? 'php',
      readOnly: true,
      minimap: { enabled: false },
    };
  });

  editableOptions = computed(() => {
    const c = this.challenge();
    return {
      theme: 'vs',
      language: c?.language ?? 'php',
      readOnly: false,
      minimap: { enabled: false },
    };
  });

  constructor() {
    this.loadChallenge();
    this.route.paramMap.subscribe((paramMap) => {
      const idParam = paramMap.get('id');
      const id = idParam ? parseInt(idParam, 10) : null;
      if (id != null && !isNaN(id)) {
        this.loadChallengeForId(id);
      }
    });
    this.route.queryParamMap.subscribe((queryParamMap) => {
      this.isMysteryPattern.set(queryParamMap.get('mode') === 'random');
    });
  }

  private loadChallenge(): void {
    const id = this.challengeId();
    if (id == null || isNaN(id)) {
      this.loadError.set('Invalid challenge id');
      this.loading.set(false);
      return;
    }
    this.loadChallengeForId(id);
  }

  private loadChallengeForId(id: number): void {
    this.loading.set(true);
    this.loadError.set(null);
    this.generateError.set(null);
    this.challenge.set(null);
    this.result.set(null);
    this.revealedPattern.set(null);
    this.challengesService.getById(id).subscribe({
      next: (c) => {
        this.challenge.set(c);
        this.solutionCode = c.messy_code ?? '';
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        const msg = (err?.error as { message?: string })?.message ?? err?.message ?? 'Failed to load challenge';
        this.loadError.set(msg);
      },
    });
  }

  generateExample(): void {
    const c = this.challenge();
    if (!c) return;
    this.generatingExample.set(true);
    this.generateError.set(null);
    this.challengesService.generateVariation(c.expected_pattern, c.language, c.difficulty).subscribe({
      next: (generated) => {
        this.challenge.set({
          ...c,
          title: generated.title,
          messy_code: generated.messy_code,
          language: generated.language,
          expected_pattern: generated.pattern_name,
        });
        this.solutionCode = generated.messy_code;
        this.result.set(null);
        this.revealedPattern.set(null);
        this.generatingExample.set(false);
      },
      error: (err) => {
        this.generatingExample.set(false);
        const msg = (err?.error as { message?: string })?.message ?? err?.message ?? 'Example generation failed';
        this.generateError.set(msg);
      },
    });
  }

  submit(): void {
    const c = this.challenge();
    const id = this.challengeId();
    if (!c || id == null) return;
    this.submitting.set(true);
    this.result.set(null);
    this.attemptsService.submit(id, this.solutionCode).subscribe({
      next: (res) => {
        this.result.set(res);
        this.submitting.set(false);
      },
      error: (err) => {
        this.submitting.set(false);
        const msg = (err?.error as { message?: string })?.message ?? err?.message ?? 'Submit failed';
        this.result.set({ score: 0, feedback: msg });
      },
    });
  }

  revealPattern(): void {
    const c = this.challenge();
    if (!c) return;
    this.revealLoading.set(true);
    this.patternsService.reveal(c.pattern_id).subscribe({
      next: (pattern) => {
        this.revealedPattern.set(pattern);
        this.revealLoading.set(false);
      },
      error: () => {
        this.revealLoading.set(false);
      },
    });
  }

  toggleHint(): void {
    this.showHint.update((v) => !v);
  }

  currentHint(): string {
    const c = this.challenge();
    const pattern = c?.expected_pattern?.toLowerCase() ?? '';
    if (pattern.includes('strategy')) {
      return 'Look for conditional branches selecting behavior. Replace branch selection with interchangeable classes that share one interface.';
    }
    if (pattern.includes('factory')) {
      return 'If object creation is spread across conditionals, centralize construction behind a dedicated creator/factory.';
    }
    if (pattern.includes('observer')) {
      return 'Find direct dependencies between event producer and consumers. Consider publish/subscribe to decouple updates.';
    }
    return 'Identify the most repeated decision logic, then separate varying behavior behind a common interface.';
  }
}
