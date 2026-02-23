import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ChallengesService } from '../../services/challenges.service';
import { PatternsService } from '../../services/patterns.service';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.id;
function ChallengeListComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 2);
    i0.ɵɵtext(1, "Loading challenges\u2026");
    i0.ɵɵelementEnd();
} }
function ChallengeListComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "a", 4);
    i0.ɵɵtext(3, "Check system status");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function ChallengeListComponent_Conditional_7_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 9);
    i0.ɵɵtext(1, "No challenges available yet. Create one first.");
    i0.ɵɵelementEnd();
} }
function ChallengeListComponent_Conditional_7_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 9);
    i0.ɵɵtext(1, "No sample challenges yet.");
    i0.ɵɵelementEnd();
} }
function ChallengeListComponent_Conditional_7_Conditional_15_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const challenge_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", challenge_r4.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", challenge_r4.title, " (", challenge_r4.expected_pattern, " \u00B7 ", challenge_r4.difficulty, ") ");
} }
function ChallengeListComponent_Conditional_7_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 13);
    i0.ɵɵtext(1, "Available challenges");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "select", 14);
    i0.ɵɵlistener("change", function ChallengeListComponent_Conditional_7_Conditional_15_Template_select_change_2_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.onSampleSelected($event)); });
    i0.ɵɵrepeaterCreate(3, ChallengeListComponent_Conditional_7_Conditional_15_For_4_Template, 2, 4, "option", 15, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 16);
    i0.ɵɵlistener("click", function ChallengeListComponent_Conditional_7_Conditional_15_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.openSelectedChallenge()); });
    i0.ɵɵtext(6, " Open sample challenge ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", (tmp_2_0 = ctx_r0.selectedChallengeId()) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "");
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.challenges());
} }
function ChallengeListComponent_Conditional_7_Conditional_19_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 2);
    i0.ɵɵtext(1, "Loading patterns\u2026");
    i0.ɵɵelementEnd();
} }
function ChallengeListComponent_Conditional_7_Conditional_19_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "p", 20);
    i0.ɵɵtext(3, "Ensure the backend is running and the patterns API is available (GET /api/patterns).");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.patternsError());
} }
function ChallengeListComponent_Conditional_7_Conditional_19_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 21);
    i0.ɵɵtext(1, "No patterns available.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "p", 22);
    i0.ɵɵtext(3, "Seed the backend database: ");
    i0.ɵɵelementStart(4, "code");
    i0.ɵɵtext(5, "php artisan db:seed");
    i0.ɵɵelementEnd()();
} }
function ChallengeListComponent_Conditional_7_Conditional_19_Conditional_6_For_2_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1, "Creating\u2026");
    i0.ɵɵelementEnd();
} }
function ChallengeListComponent_Conditional_7_Conditional_19_Conditional_6_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 23)(1, "button", 24);
    i0.ɵɵlistener("click", function ChallengeListComponent_Conditional_7_Conditional_19_Conditional_6_For_2_Template_button_click_1_listener() { const pattern_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.createChallenge(pattern_r7)); });
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, ChallengeListComponent_Conditional_7_Conditional_19_Conditional_6_For_2_Conditional_3_Template, 2, 0, "span", 25);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const pattern_r7 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.creating());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", pattern_r7.name, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.creating() ? 3 : -1);
} }
function ChallengeListComponent_Conditional_7_Conditional_19_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 18);
    i0.ɵɵrepeaterCreate(1, ChallengeListComponent_Conditional_7_Conditional_19_Conditional_6_For_2_Template, 4, 3, "li", 23, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.patterns());
} }
function ChallengeListComponent_Conditional_7_Conditional_19_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.createError());
} }
function ChallengeListComponent_Conditional_7_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "p", 17);
    i0.ɵɵtext(2, "Select a pattern for your new challenge");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ChallengeListComponent_Conditional_7_Conditional_19_Conditional_3_Template, 2, 0, "p", 2)(4, ChallengeListComponent_Conditional_7_Conditional_19_Conditional_4_Template, 4, 1)(5, ChallengeListComponent_Conditional_7_Conditional_19_Conditional_5_Template, 6, 0)(6, ChallengeListComponent_Conditional_7_Conditional_19_Conditional_6_Template, 3, 0, "ul", 18)(7, ChallengeListComponent_Conditional_7_Conditional_19_Conditional_7_Template, 2, 1, "p", 3);
    i0.ɵɵelementStart(8, "button", 19);
    i0.ɵɵlistener("click", function ChallengeListComponent_Conditional_7_Conditional_19_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.closePatternPicker()); });
    i0.ɵɵtext(9, " Cancel ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r0.patternsLoading() ? 3 : ctx_r0.patternsError() ? 4 : ctx_r0.patterns().length === 0 ? 5 : 6);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r0.createError() ? 7 : -1);
} }
function ChallengeListComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "section", 6)(2, "h2");
    i0.ɵɵtext(3, "Random challenge");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 7);
    i0.ɵɵtext(5, "Start immediately with a random challenge from the current set.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 8);
    i0.ɵɵlistener("click", function ChallengeListComponent_Conditional_7_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.startRandomChallenge()); });
    i0.ɵɵtext(7, " Start random challenge ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, ChallengeListComponent_Conditional_7_Conditional_8_Template, 2, 0, "p", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "section", 6)(10, "h2");
    i0.ɵɵtext(11, "Sample challenge");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "p", 7);
    i0.ɵɵtext(13, "Pick a specific challenge from the list and open it directly.");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, ChallengeListComponent_Conditional_7_Conditional_14_Template, 2, 0, "p", 9)(15, ChallengeListComponent_Conditional_7_Conditional_15_Template, 7, 1);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 10)(17, "button", 11);
    i0.ɵɵlistener("click", function ChallengeListComponent_Conditional_7_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.openPatternPicker()); });
    i0.ɵɵtext(18, " Create challenge ");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(19, ChallengeListComponent_Conditional_7_Conditional_19_Template, 10, 2, "div", 12);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("disabled", ctx_r0.challenges().length === 0);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.challenges().length === 0 ? 8 : -1);
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(ctx_r0.challenges().length === 0 ? 14 : 15);
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(ctx_r0.showPatternPicker() ? 19 : -1);
} }
export class ChallengeListComponent {
    constructor() {
        this.challengesService = inject(ChallengesService);
        this.patternsService = inject(PatternsService);
        this.router = inject(Router);
        this.challenges = signal([]);
        this.loading = signal(true);
        this.error = signal(null);
        this.showPatternPicker = signal(false);
        this.patterns = signal([]);
        this.patternsLoading = signal(false);
        this.patternsError = signal(null);
        this.creating = signal(false);
        this.createError = signal(null);
        this.selectedChallengeId = signal(null);
        this.loadChallenges();
    }
    loadChallenges() {
        this.loading.set(true);
        this.error.set(null);
        this.challengesService.list().subscribe({
            next: (list) => {
                this.challenges.set(list);
                const currentSelectedId = this.selectedChallengeId();
                if (list.length === 0) {
                    this.selectedChallengeId.set(null);
                }
                else if (currentSelectedId == null || !list.some((c) => c.id === currentSelectedId)) {
                    this.selectedChallengeId.set(list[0].id);
                }
                this.loading.set(false);
            },
            error: (err) => {
                this.loading.set(false);
                const msg = err?.error?.message ?? err?.message ?? 'Failed to load challenges. Ensure the backend is running.';
                this.error.set(msg);
            },
        });
    }
    openPatternPicker() {
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
                const msg = err?.error?.message ?? err?.message ?? 'Failed to load patterns';
                this.patternsError.set(msg);
            },
        });
    }
    closePatternPicker() {
        this.showPatternPicker.set(false);
        this.patternsError.set(null);
        this.createError.set(null);
    }
    startRandomChallenge() {
        const list = this.challenges();
        if (list.length === 0)
            return;
        const randomIndex = Math.floor(Math.random() * list.length);
        this.router.navigate(['/challenges', list[randomIndex].id], {
            queryParams: { mode: 'random' },
        });
    }
    onSampleSelected(event) {
        const target = event.target;
        if (!target)
            return;
        const id = Number(target.value);
        if (!Number.isNaN(id)) {
            this.selectedChallengeId.set(id);
        }
    }
    openSelectedChallenge() {
        const id = this.selectedChallengeId();
        if (id == null)
            return;
        this.router.navigate(['/challenges', id], {
            queryParams: {},
        });
    }
    createChallenge(pattern) {
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
                const msg = err?.error?.message ?? err?.message ?? 'Failed to create challenge';
                this.createError.set(msg);
            },
        });
    }
    static { this.ɵfac = function ChallengeListComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ChallengeListComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChallengeListComponent, selectors: [["app-challenge-list"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 8, vars: 1, consts: [[1, "challenge-list-page"], [1, "subtitle"], [1, "loading"], [1, "error-detail"], ["routerLink", "/status", 1, "status-hint"], [1, "path-grid"], [1, "path-card"], [1, "path-copy"], ["type", "button", 1, "primary-btn", 3, "click", "disabled"], [1, "card-note"], [1, "create-section"], ["type", "button", 1, "create-btn", 3, "click"], [1, "pattern-picker", "pattern-picker-overlay"], ["for", "sample-challenge-select", 1, "sample-label"], ["id", "sample-challenge-select", 1, "sample-select", 3, "change", "value"], [3, "value"], ["type", "button", 1, "secondary-btn", 3, "click"], [1, "picker-label"], [1, "pattern-list"], ["type", "button", 1, "cancel-btn", 3, "click"], [1, "error-hint"], [1, "empty-patterns-message"], [1, "empty-patterns-hint"], [1, "pattern-item"], ["type", "button", 1, "pattern-btn", 3, "click", "disabled"], [1, "creating-label"]], template: function ChallengeListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h1");
            i0.ɵɵtext(2, "Challenges");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "p", 1);
            i0.ɵɵtext(4, "Pick your path: jump into a random challenge or choose a sample challenge.");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, ChallengeListComponent_Conditional_5_Template, 2, 0, "p", 2)(6, ChallengeListComponent_Conditional_6_Template, 4, 1)(7, ChallengeListComponent_Conditional_7_Template, 20, 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(ctx.loading() ? 5 : ctx.error() ? 6 : 7);
        } }, dependencies: [RouterLink], styles: [".challenge-list-page[_ngcontent-%COMP%] {\n      font-family: system-ui, sans-serif;\n      max-width: 980px;\n      margin: 3rem auto;\n      padding: 1.5rem;\n    }\n    h1[_ngcontent-%COMP%] {\n      font-size: 1.5rem;\n      margin-bottom: 0.5rem;\n    }\n    .subtitle[_ngcontent-%COMP%] {\n      color: #666;\n      margin-bottom: 1.5rem;\n    }\n    .loading[_ngcontent-%COMP%], .error-detail[_ngcontent-%COMP%] {\n      margin-top: 1rem;\n    }\n    .error-detail[_ngcontent-%COMP%] {\n      color: #721c24;\n    }\n    .status-hint[_ngcontent-%COMP%] {\n      display: inline-block;\n      margin-top: 0.5rem;\n      font-size: 0.875rem;\n      color: #0066cc;\n      text-decoration: none;\n    }\n    .status-hint[_ngcontent-%COMP%]:hover {\n      text-decoration: underline;\n    }\n    .path-grid[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      gap: 1rem;\n    }\n    .path-card[_ngcontent-%COMP%] {\n      background: #f8f9fb;\n      border: 1px solid #e6e9ef;\n      border-radius: 10px;\n      padding: 1.1rem;\n      min-height: 220px;\n    }\n    .path-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      font-size: 1.1rem;\n      margin: 0 0 0.5rem 0;\n    }\n    .path-copy[_ngcontent-%COMP%] {\n      color: #555;\n      margin: 0 0 1rem 0;\n      font-size: 0.95rem;\n    }\n    .card-note[_ngcontent-%COMP%] {\n      margin-top: 0.75rem;\n      color: #666;\n      font-size: 0.875rem;\n    }\n    .create-btn[_ngcontent-%COMP%] {\n      padding: 0.625rem 1.25rem;\n      font-size: 0.95rem;\n      background: #0066cc;\n      color: white;\n      border: none;\n      border-radius: 8px;\n      cursor: pointer;\n    }\n    .create-btn[_ngcontent-%COMP%]:hover {\n      background: #0052a3;\n    }\n    .primary-btn[_ngcontent-%COMP%], .secondary-btn[_ngcontent-%COMP%] {\n      padding: 0.625rem 1rem;\n      border-radius: 8px;\n      font-size: 0.95rem;\n      border: none;\n      cursor: pointer;\n    }\n    .primary-btn[_ngcontent-%COMP%] {\n      background: #0066cc;\n      color: #fff;\n    }\n    .primary-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n      background: #0052a3;\n    }\n    .secondary-btn[_ngcontent-%COMP%] {\n      background: #eef3fa;\n      color: #1f3d5a;\n      border: 1px solid #c8d8ec;\n      margin-top: 0.75rem;\n    }\n    .secondary-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n      background: #e1ecf8;\n    }\n    .primary-btn[_ngcontent-%COMP%]:disabled, .secondary-btn[_ngcontent-%COMP%]:disabled {\n      opacity: 0.6;\n      cursor: not-allowed;\n    }\n    .sample-label[_ngcontent-%COMP%] {\n      display: block;\n      font-size: 0.875rem;\n      margin-bottom: 0.4rem;\n      color: #555;\n    }\n    .sample-select[_ngcontent-%COMP%] {\n      width: 100%;\n      padding: 0.6rem 0.7rem;\n      border: 1px solid #cfd6e0;\n      border-radius: 8px;\n      background: #fff;\n      font-size: 0.92rem;\n    }\n    .create-section[_ngcontent-%COMP%] {\n      margin-top: 1.5rem;\n    }\n    .pattern-picker[_ngcontent-%COMP%] {\n      margin-top: 1.5rem;\n      padding: 1.25rem;\n      background: #f9f9f9;\n      border-radius: 10px;\n      border: 1px solid #eee;\n    }\n    .pattern-picker-overlay[_ngcontent-%COMP%] {\n      margin-top: 1rem;\n    }\n    .picker-label[_ngcontent-%COMP%] {\n      font-weight: 500;\n      margin: 0 0 0.75rem 0;\n      font-size: 0.9375rem;\n    }\n    .pattern-list[_ngcontent-%COMP%] {\n      list-style: none;\n      padding: 0;\n      margin: 0 0 1rem 0;\n    }\n    .pattern-item[_ngcontent-%COMP%] {\n      margin-bottom: 0.5rem;\n    }\n    .pattern-btn[_ngcontent-%COMP%] {\n      display: block;\n      width: 100%;\n      padding: 0.6rem 1rem;\n      text-align: left;\n      background: #fff;\n      border: 1px solid #ddd;\n      border-radius: 6px;\n      cursor: pointer;\n      font-size: 0.9375rem;\n    }\n    .pattern-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n      background: #f5f5f5;\n      border-color: #0066cc;\n    }\n    .pattern-btn[_ngcontent-%COMP%]:disabled {\n      opacity: 0.7;\n      cursor: not-allowed;\n    }\n    .creating-label[_ngcontent-%COMP%] {\n      margin-left: 0.5rem;\n      color: #666;\n      font-size: 0.875rem;\n    }\n    .cancel-btn[_ngcontent-%COMP%] {\n      padding: 0.4rem 0.75rem;\n      font-size: 0.875rem;\n      background: transparent;\n      border: 1px solid #ccc;\n      border-radius: 6px;\n      cursor: pointer;\n    }\n    .cancel-btn[_ngcontent-%COMP%]:hover {\n      background: #f0f0f0;\n    }\n    .error-hint[_ngcontent-%COMP%], .empty-patterns-hint[_ngcontent-%COMP%] {\n      font-size: 0.875rem;\n      color: #666;\n      margin: 0.5rem 0 0 0;\n    }\n    .empty-patterns-message[_ngcontent-%COMP%] {\n      font-weight: 500;\n      margin: 0 0 0.25rem 0;\n    }\n    .empty-patterns-hint[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n      background: #eee;\n      padding: 0.15rem 0.4rem;\n      border-radius: 4px;\n      font-size: 0.8125rem;\n    }\n    @media (max-width: 850px) {\n      .path-grid[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n      }\n    }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChallengeListComponent, [{
        type: Component,
        args: [{ selector: 'app-challenge-list', standalone: true, imports: [RouterLink], template: `
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
  `, styles: ["\n    .challenge-list-page {\n      font-family: system-ui, sans-serif;\n      max-width: 980px;\n      margin: 3rem auto;\n      padding: 1.5rem;\n    }\n    h1 {\n      font-size: 1.5rem;\n      margin-bottom: 0.5rem;\n    }\n    .subtitle {\n      color: #666;\n      margin-bottom: 1.5rem;\n    }\n    .loading, .error-detail {\n      margin-top: 1rem;\n    }\n    .error-detail {\n      color: #721c24;\n    }\n    .status-hint {\n      display: inline-block;\n      margin-top: 0.5rem;\n      font-size: 0.875rem;\n      color: #0066cc;\n      text-decoration: none;\n    }\n    .status-hint:hover {\n      text-decoration: underline;\n    }\n    .path-grid {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      gap: 1rem;\n    }\n    .path-card {\n      background: #f8f9fb;\n      border: 1px solid #e6e9ef;\n      border-radius: 10px;\n      padding: 1.1rem;\n      min-height: 220px;\n    }\n    .path-card h2 {\n      font-size: 1.1rem;\n      margin: 0 0 0.5rem 0;\n    }\n    .path-copy {\n      color: #555;\n      margin: 0 0 1rem 0;\n      font-size: 0.95rem;\n    }\n    .card-note {\n      margin-top: 0.75rem;\n      color: #666;\n      font-size: 0.875rem;\n    }\n    .create-btn {\n      padding: 0.625rem 1.25rem;\n      font-size: 0.95rem;\n      background: #0066cc;\n      color: white;\n      border: none;\n      border-radius: 8px;\n      cursor: pointer;\n    }\n    .create-btn:hover {\n      background: #0052a3;\n    }\n    .primary-btn, .secondary-btn {\n      padding: 0.625rem 1rem;\n      border-radius: 8px;\n      font-size: 0.95rem;\n      border: none;\n      cursor: pointer;\n    }\n    .primary-btn {\n      background: #0066cc;\n      color: #fff;\n    }\n    .primary-btn:hover:not(:disabled) {\n      background: #0052a3;\n    }\n    .secondary-btn {\n      background: #eef3fa;\n      color: #1f3d5a;\n      border: 1px solid #c8d8ec;\n      margin-top: 0.75rem;\n    }\n    .secondary-btn:hover:not(:disabled) {\n      background: #e1ecf8;\n    }\n    .primary-btn:disabled, .secondary-btn:disabled {\n      opacity: 0.6;\n      cursor: not-allowed;\n    }\n    .sample-label {\n      display: block;\n      font-size: 0.875rem;\n      margin-bottom: 0.4rem;\n      color: #555;\n    }\n    .sample-select {\n      width: 100%;\n      padding: 0.6rem 0.7rem;\n      border: 1px solid #cfd6e0;\n      border-radius: 8px;\n      background: #fff;\n      font-size: 0.92rem;\n    }\n    .create-section {\n      margin-top: 1.5rem;\n    }\n    .pattern-picker {\n      margin-top: 1.5rem;\n      padding: 1.25rem;\n      background: #f9f9f9;\n      border-radius: 10px;\n      border: 1px solid #eee;\n    }\n    .pattern-picker-overlay {\n      margin-top: 1rem;\n    }\n    .picker-label {\n      font-weight: 500;\n      margin: 0 0 0.75rem 0;\n      font-size: 0.9375rem;\n    }\n    .pattern-list {\n      list-style: none;\n      padding: 0;\n      margin: 0 0 1rem 0;\n    }\n    .pattern-item {\n      margin-bottom: 0.5rem;\n    }\n    .pattern-btn {\n      display: block;\n      width: 100%;\n      padding: 0.6rem 1rem;\n      text-align: left;\n      background: #fff;\n      border: 1px solid #ddd;\n      border-radius: 6px;\n      cursor: pointer;\n      font-size: 0.9375rem;\n    }\n    .pattern-btn:hover:not(:disabled) {\n      background: #f5f5f5;\n      border-color: #0066cc;\n    }\n    .pattern-btn:disabled {\n      opacity: 0.7;\n      cursor: not-allowed;\n    }\n    .creating-label {\n      margin-left: 0.5rem;\n      color: #666;\n      font-size: 0.875rem;\n    }\n    .cancel-btn {\n      padding: 0.4rem 0.75rem;\n      font-size: 0.875rem;\n      background: transparent;\n      border: 1px solid #ccc;\n      border-radius: 6px;\n      cursor: pointer;\n    }\n    .cancel-btn:hover {\n      background: #f0f0f0;\n    }\n    .error-hint, .empty-patterns-hint {\n      font-size: 0.875rem;\n      color: #666;\n      margin: 0.5rem 0 0 0;\n    }\n    .empty-patterns-message {\n      font-weight: 500;\n      margin: 0 0 0.25rem 0;\n    }\n    .empty-patterns-hint code {\n      background: #eee;\n      padding: 0.15rem 0.4rem;\n      border-radius: 4px;\n      font-size: 0.8125rem;\n    }\n    @media (max-width: 850px) {\n      .path-grid {\n        grid-template-columns: 1fr;\n      }\n    }\n  "] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ChallengeListComponent, { className: "ChallengeListComponent", filePath: "src\\app\\pages\\challenge-list\\challenge-list.component.ts", lineNumber: 301 }); })();
//# sourceMappingURL=challenge-list.component.js.map