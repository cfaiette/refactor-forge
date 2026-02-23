import { Component, inject, signal, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditorComponent } from 'ngx-monaco-editor-v2';
import { ChallengesService } from '../../services/challenges.service';
import { AttemptsService } from '../../services/attempts.service';
import { PatternsService } from '../../services/patterns.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
function RefactorComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h1");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.displayTitle());
} }
function RefactorComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.loadError());
} }
function RefactorComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 4);
    i0.ɵɵtext(1, "Loading challenge\u2026");
    i0.ɵɵelementEnd();
} }
function RefactorComponent_Conditional_7_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8)(1, "ngx-monaco-editor", 22);
    i0.ɵɵtwoWayListener("ngModelChange", function RefactorComponent_Conditional_7_Conditional_12_Template_ngx_monaco_editor_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.solutionCode, $event) || (ctx_r0.solutionCode = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("options", ctx_r0.editableOptions())("model", ctx_r0.editableModel);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.solutionCode);
} }
function RefactorComponent_Conditional_7_Conditional_13_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "p", 23);
    i0.ɵɵtext(2, "Loading revealed solution\u2026");
    i0.ɵɵelementEnd()();
} }
function RefactorComponent_Conditional_7_Conditional_13_Conditional_1_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelement(1, "ngx-monaco-editor", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 24)(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const pattern_r4 = ctx;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("options", ctx_r0.revealedOptions())("model", ctx_r0.revealedModel());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(pattern_r4.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(pattern_r4.intent);
} }
function RefactorComponent_Conditional_7_Conditional_13_Conditional_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "p", 23);
    i0.ɵɵtext(2, "Click \"Reveal pattern\" to unlock the revealed solution.");
    i0.ɵɵelementEnd()();
} }
function RefactorComponent_Conditional_7_Conditional_13_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RefactorComponent_Conditional_7_Conditional_13_Conditional_1_Conditional_0_Template, 7, 4)(1, RefactorComponent_Conditional_7_Conditional_13_Conditional_1_Conditional_1_Template, 3, 0, "div", 8);
} if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵconditional((tmp_3_0 = ctx_r0.revealedPattern()) ? 0 : 1, tmp_3_0);
} }
function RefactorComponent_Conditional_7_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RefactorComponent_Conditional_7_Conditional_13_Conditional_0_Template, 3, 0, "div", 8)(1, RefactorComponent_Conditional_7_Conditional_13_Conditional_1_Template, 2, 1);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵconditional(ctx_r0.revealLoading() ? 0 : 1);
} }
function RefactorComponent_Conditional_7_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.currentHint(), " ");
} }
function RefactorComponent_Conditional_7_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.generateError());
} }
function RefactorComponent_Conditional_7_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "h2");
    i0.ɵɵtext(2, "Result");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 25);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 26);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Score: ", ctx_r0.result().score, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.result().feedback);
} }
function RefactorComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6)(2, "label", 7);
    i0.ɵɵtext(3, "Original code (read-only)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 8);
    i0.ɵɵelement(5, "ngx-monaco-editor", 9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 6)(7, "div", 10)(8, "button", 11);
    i0.ɵɵlistener("click", function RefactorComponent_Conditional_7_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setRightTab("solution")); });
    i0.ɵɵtext(9, " Your solution ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 12);
    i0.ɵɵlistener("click", function RefactorComponent_Conditional_7_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setRightTab("revealed")); });
    i0.ɵɵtext(11, " Revealed solution ");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(12, RefactorComponent_Conditional_7_Conditional_12_Template, 2, 3, "div", 8)(13, RefactorComponent_Conditional_7_Conditional_13_Template, 2, 1);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 13)(15, "div", 14)(16, "button", 15);
    i0.ɵɵlistener("click", function RefactorComponent_Conditional_7_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.generateExample()); });
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 16)(19, "button", 17);
    i0.ɵɵlistener("click", function RefactorComponent_Conditional_7_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.toggleHint()); });
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "button", 18);
    i0.ɵɵlistener("click", function RefactorComponent_Conditional_7_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.revealPattern()); });
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "button", 19);
    i0.ɵɵlistener("click", function RefactorComponent_Conditional_7_Template_button_click_23_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.submit()); });
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(25, RefactorComponent_Conditional_7_Conditional_25_Template, 2, 1, "div", 20)(26, RefactorComponent_Conditional_7_Conditional_26_Template, 2, 1, "p", 3)(27, RefactorComponent_Conditional_7_Conditional_27_Template, 7, 2, "div", 21);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("options", ctx_r0.readOnlyOptions())("model", ctx_r0.readOnlyModel());
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("active", ctx_r0.activeRightTab() === "solution");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r0.activeRightTab() === "revealed");
    i0.ɵɵproperty("disabled", !ctx_r0.revealedPattern() && !ctx_r0.revealLoading());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.activeRightTab() === "solution" ? 12 : 13);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r0.generatingExample() || ctx_r0.submitting());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.generatingExample() ? "Generating\u2026" : "Regenerate Example", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.showHint() ? "Hide hint" : "Hint", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.revealLoading() || !!ctx_r0.revealedPattern());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.revealLoading() ? "Loading\u2026" : ctx_r0.revealedPattern() ? "Pattern revealed" : "Reveal pattern", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.submitting());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.submitting() ? "Submitting\u2026" : "Submit", " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.showHint() ? 25 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.generateError() ? 26 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.result() ? 27 : -1);
} }
export class RefactorComponent {
    get editableModel() {
        const c = this.challenge();
        return {
            value: this.solutionCode,
            language: c?.language ?? 'php',
        };
    }
    constructor() {
        this.route = inject(ActivatedRoute);
        this.challengesService = inject(ChallengesService);
        this.attemptsService = inject(AttemptsService);
        this.patternsService = inject(PatternsService);
        this.challenge = signal(null);
        this.loadError = signal(null);
        this.loading = signal(true);
        this.solutionCode = '';
        this.submitting = signal(false);
        this.result = signal(null);
        this.revealedPattern = signal(null);
        this.revealLoading = signal(false);
        this.generatingExample = signal(false);
        this.generateError = signal(null);
        this.showHint = signal(false);
        this.isMysteryPattern = signal(this.route.snapshot.queryParamMap.get('mode') === 'random');
        this.activeRightTab = signal('solution');
        this.challengeId = computed(() => {
            const id = this.route.snapshot.paramMap.get('id');
            return id ? parseInt(id, 10) : null;
        });
        this.displayTitle = computed(() => (this.isMysteryPattern() ? 'Mystery Pattern' : this.challenge()?.title ?? ''));
        this.readOnlyModel = computed(() => {
            const c = this.challenge();
            if (!c)
                return { value: '', language: 'php' };
            return { value: this.prettifyCode(c.messy_code, c.language), language: c.language };
        });
        this.readOnlyOptions = computed(() => {
            const c = this.challenge();
            return {
                theme: 'vs',
                language: c?.language ?? 'php',
                readOnly: true,
                minimap: { enabled: false },
                wordWrap: 'on',
            };
        });
        this.editableOptions = computed(() => {
            const c = this.challenge();
            return {
                theme: 'vs',
                language: c?.language ?? 'php',
                readOnly: false,
                minimap: { enabled: false },
            };
        });
        this.revealedModel = computed(() => ({
            value: this.prettifyCode(this.revealedPattern()?.example_solution ?? '', this.challenge()?.language ?? 'php'),
            language: this.challenge()?.language ?? 'php',
        }));
        this.revealedOptions = computed(() => ({
            theme: 'vs',
            language: this.challenge()?.language ?? 'php',
            readOnly: true,
            minimap: { enabled: false },
            wordWrap: 'on',
        }));
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
    loadChallenge() {
        const id = this.challengeId();
        if (id == null || isNaN(id)) {
            this.loadError.set('Invalid challenge id');
            this.loading.set(false);
            return;
        }
        this.loadChallengeForId(id);
    }
    loadChallengeForId(id) {
        this.loading.set(true);
        this.loadError.set(null);
        this.generateError.set(null);
        this.activeRightTab.set('solution');
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
                const msg = err?.error?.message ?? err?.message ?? 'Failed to load challenge';
                this.loadError.set(msg);
            },
        });
    }
    generateExample() {
        const c = this.challenge();
        if (!c)
            return;
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
                this.activeRightTab.set('solution');
                this.generatingExample.set(false);
            },
            error: (err) => {
                this.generatingExample.set(false);
                const msg = err?.error?.message ?? err?.message ?? 'Example generation failed';
                this.generateError.set(msg);
            },
        });
    }
    submit() {
        const c = this.challenge();
        const id = this.challengeId();
        if (!c || id == null)
            return;
        this.submitting.set(true);
        this.result.set(null);
        this.attemptsService.submit(id, this.solutionCode).subscribe({
            next: (res) => {
                this.result.set(res);
                this.submitting.set(false);
            },
            error: (err) => {
                this.submitting.set(false);
                const msg = err?.error?.message ?? err?.message ?? 'Submit failed';
                this.result.set({ score: 0, feedback: msg });
            },
        });
    }
    revealPattern() {
        const c = this.challenge();
        if (!c)
            return;
        this.revealLoading.set(true);
        this.patternsService.reveal(c.pattern_id).subscribe({
            next: (pattern) => {
                this.revealedPattern.set(pattern);
                this.activeRightTab.set('revealed');
                this.revealLoading.set(false);
            },
            error: () => {
                this.revealLoading.set(false);
            },
        });
    }
    toggleHint() {
        this.showHint.update((v) => !v);
    }
    setRightTab(tab) {
        this.activeRightTab.set(tab);
    }
    prettifyCode(code, language) {
        const normalized = (code ?? '').replace(/\r\n/g, '\n').trim();
        if (!normalized)
            return '';
        const lang = (language ?? '').toLowerCase();
        if (!['php', 'typescript', 'javascript'].includes(lang)) {
            return normalized;
        }
        const expanded = normalized
            .replace(/;\s*/g, ';\n')
            .replace(/{\s*/g, '{\n')
            .replace(/}\s*/g, '}\n')
            .replace(/\n{3,}/g, '\n\n');
        const lines = expanded.split('\n');
        let indentLevel = 0;
        const formatted = [];
        for (const raw of lines) {
            const line = raw.trim();
            if (!line) {
                if (formatted.length > 0 && formatted[formatted.length - 1] !== '') {
                    formatted.push('');
                }
                continue;
            }
            if (line.startsWith('}')) {
                indentLevel = Math.max(indentLevel - 1, 0);
            }
            formatted.push(`${'  '.repeat(indentLevel)}${line}`);
            if (line.endsWith('{')) {
                indentLevel += 1;
            }
        }
        return formatted.join('\n').trim();
    }
    currentHint() {
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
    static { this.ɵfac = function RefactorComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RefactorComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RefactorComponent, selectors: [["app-refactor"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 8, vars: 2, consts: [[1, "refactor-page"], [1, "refactor-header"], ["routerLink", "/challenges", 1, "back-link"], [1, "error-detail"], [1, "loading"], [1, "editors-row"], [1, "editor-pane"], [1, "pane-label"], [1, "monaco-wrapper"], [3, "options", "model"], [1, "pane-tabs"], ["type", "button", 1, "pane-tab", 3, "click"], ["type", "button", 1, "pane-tab", 3, "click", "disabled"], [1, "actions"], [1, "actions-left"], [1, "generate-btn", 3, "click", "disabled"], [1, "actions-right"], [1, "hint-btn", 3, "click"], [1, "reveal-btn", 3, "click", "disabled"], [1, "submit-btn", "submit-btn-right", 3, "click", "disabled"], [1, "hint-panel"], [1, "results-panel"], [3, "ngModelChange", "options", "model", "ngModel"], [1, "tab-status"], [1, "revealed-meta", "revealed-meta-bottom"], [1, "score"], [1, "feedback"]], template: function RefactorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "header", 1)(2, "a", 2);
            i0.ɵɵtext(3, "\u2190 Challenges");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, RefactorComponent_Conditional_4_Template, 2, 1, "h1");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, RefactorComponent_Conditional_5_Template, 2, 1, "p", 3)(6, RefactorComponent_Conditional_6_Template, 2, 0, "p", 4)(7, RefactorComponent_Conditional_7_Template, 28, 18);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.challenge() ? 4 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loadError() ? 5 : ctx.loading() ? 6 : ctx.challenge() ? 7 : -1);
        } }, dependencies: [RouterLink, FormsModule, i1.NgControlStatus, i1.NgModel, EditorComponent], styles: [".refactor-page[_ngcontent-%COMP%] {\n      font-family: system-ui, sans-serif;\n      padding: 1rem;\n      max-width: 1400px;\n      margin: 0 auto;\n    }\n    .refactor-header[_ngcontent-%COMP%] {\n      margin-bottom: 1rem;\n    }\n    .back-link[_ngcontent-%COMP%] {\n      display: inline-block;\n      margin-bottom: 0.5rem;\n      color: #0066cc;\n      text-decoration: none;\n    }\n    .back-link[_ngcontent-%COMP%]:hover {\n      text-decoration: underline;\n    }\n    .refactor-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      font-size: 1.25rem;\n      margin: 0;\n    }\n    .error-detail[_ngcontent-%COMP%], .loading[_ngcontent-%COMP%] {\n      color: #721c24;\n    }\n    .editors-row[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      gap: 1rem;\n      min-height: 400px;\n    }\n    @media (max-width: 768px) {\n      .editors-row[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n      }\n    }\n    .editor-pane[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      border: 1px solid #ddd;\n      border-radius: 8px;\n      overflow: hidden;\n    }\n    .pane-label[_ngcontent-%COMP%] {\n      padding: 0.5rem 0.75rem;\n      background: #f5f5f5;\n      font-size: 0.875rem;\n      font-weight: 500;\n      margin: 0;\n    }\n    .pane-tabs[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 0.4rem;\n      padding: 0.4rem 0.5rem;\n      background: #f5f5f5;\n      border-bottom: 1px solid #ddd;\n    }\n    .pane-tab[_ngcontent-%COMP%] {\n      padding: 0.35rem 0.7rem;\n      border: 1px solid #d9d9d9;\n      background: #fff;\n      color: #444;\n      border-radius: 6px;\n      cursor: pointer;\n      font-size: 0.86rem;\n    }\n    .pane-tab[_ngcontent-%COMP%]:hover:not(:disabled) {\n      background: #f0f0f0;\n    }\n    .pane-tab.active[_ngcontent-%COMP%] {\n      background: #e8f1ff;\n      border-color: #b9d2f5;\n      color: #15457d;\n      font-weight: 500;\n    }\n    .pane-tab[_ngcontent-%COMP%]:disabled {\n      opacity: 0.6;\n      cursor: not-allowed;\n    }\n    .monaco-wrapper[_ngcontent-%COMP%] {\n      flex: 1;\n      height: 360px;\n      min-height: 360px;\n    }\n    .monaco-wrapper[_ngcontent-%COMP%]   ngx-monaco-editor[_ngcontent-%COMP%] {\n      display: block;\n      height: 100%;\n    }\n    .monaco-wrapper[_ngcontent-%COMP%]     .monaco-editor {\n      height: 360px;\n      min-height: 360px;\n    }\n    .actions[_ngcontent-%COMP%] {\n      margin-top: 1rem;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: 0.75rem;\n    }\n    .actions-left[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 0.5rem;\n      flex-wrap: wrap;\n      flex: 1;\n    }\n    .actions-right[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 0.5rem;\n      flex-wrap: wrap;\n      justify-content: flex-start;\n      flex: 1;\n    }\n    .submit-btn[_ngcontent-%COMP%] {\n      padding: 0.5rem 1.25rem;\n      font-size: 1rem;\n      background: #0066cc;\n      color: white;\n      border: none;\n      border-radius: 6px;\n      cursor: pointer;\n    }\n    .submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n      background: #0052a3;\n    }\n    .submit-btn[_ngcontent-%COMP%]:disabled {\n      opacity: 0.6;\n      cursor: not-allowed;\n    }\n    .submit-btn-right[_ngcontent-%COMP%] {\n      margin-left: auto;\n    }\n    .generate-btn[_ngcontent-%COMP%] {\n      padding: 0.5rem 1rem;\n      margin-right: 0.5rem;\n      font-size: 0.95rem;\n      background: #f5f5f5;\n      color: #333;\n      border: 1px solid #ddd;\n      border-radius: 6px;\n      cursor: pointer;\n    }\n    .generate-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n      background: #ececec;\n    }\n    .generate-btn[_ngcontent-%COMP%]:disabled {\n      opacity: 0.6;\n      cursor: not-allowed;\n    }\n    .hint-btn[_ngcontent-%COMP%] {\n      padding: 0.5rem 1rem;\n      font-size: 0.95rem;\n      background: #f5f5f5;\n      color: #333;\n      border: 1px solid #ddd;\n      border-radius: 6px;\n      cursor: pointer;\n    }\n    .hint-btn[_ngcontent-%COMP%]:hover {\n      background: #ececec;\n    }\n    .reveal-btn[_ngcontent-%COMP%] {\n      padding: 0.5rem 1rem;\n      font-size: 0.95rem;\n      background: #f5f5f5;\n      color: #333;\n      border: 1px solid #ddd;\n      border-radius: 6px;\n      cursor: pointer;\n    }\n    .reveal-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n      background: #ececec;\n    }\n    .reveal-btn[_ngcontent-%COMP%]:disabled {\n      opacity: 0.6;\n      cursor: not-allowed;\n    }\n    .hint-panel[_ngcontent-%COMP%] {\n      margin-top: 0.75rem;\n      padding: 0.75rem 0.9rem;\n      background: #fff8e8;\n      border: 1px solid #f0d79a;\n      border-radius: 8px;\n      color: #5f4708;\n      font-size: 0.95rem;\n    }\n    .tab-status[_ngcontent-%COMP%] {\n      margin: 0;\n      padding: 1rem;\n      color: #555;\n      font-size: 0.92rem;\n    }\n    .revealed-meta[_ngcontent-%COMP%] {\n      padding: 0.6rem 0.8rem 0.4rem 0.8rem;\n      border-bottom: 1px solid #eee;\n      background: #fafafa;\n      display: flex;\n      flex-direction: column;\n      gap: 0.2rem;\n      font-size: 0.86rem;\n      color: #555;\n    }\n    .revealed-meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n      color: #222;\n      font-size: 0.92rem;\n    }\n    .revealed-meta-bottom[_ngcontent-%COMP%] {\n      border-top: 1px solid #eee;\n      border-bottom: none;\n    }\n    @media (max-width: 768px) {\n      .actions[_ngcontent-%COMP%] {\n        align-items: flex-start;\n      }\n      .actions-right[_ngcontent-%COMP%] {\n        justify-content: flex-start;\n      }\n    }\n    .results-panel[_ngcontent-%COMP%] {\n      margin-top: 1.5rem;\n      padding: 1rem;\n      background: #f5f5f5;\n      border-radius: 8px;\n    }\n    .results-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      font-size: 1rem;\n      margin: 0 0 0.5rem 0;\n    }\n    .results-panel[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%] {\n      font-weight: 500;\n      margin: 0 0 0.5rem 0;\n    }\n    .results-panel[_ngcontent-%COMP%]   .feedback[_ngcontent-%COMP%] {\n      margin: 0;\n      white-space: pre-wrap;\n    }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RefactorComponent, [{
        type: Component,
        args: [{ selector: 'app-refactor', standalone: true, imports: [RouterLink, FormsModule, EditorComponent], template: `
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
            <div class="pane-tabs">
              <button
                type="button"
                class="pane-tab"
                [class.active]="activeRightTab() === 'solution'"
                (click)="setRightTab('solution')"
              >
                Your solution
              </button>
              <button
                type="button"
                class="pane-tab"
                [class.active]="activeRightTab() === 'revealed'"
                (click)="setRightTab('revealed')"
                [disabled]="!revealedPattern() && !revealLoading()"
              >
                Revealed solution
              </button>
            </div>
            @if (activeRightTab() === 'solution') {
              <div class="monaco-wrapper">
                <ngx-monaco-editor
                  [options]="editableOptions()"
                  [model]="editableModel"
                  [(ngModel)]="solutionCode"
                />
              </div>
            } @else {
              @if (revealLoading()) {
                <div class="monaco-wrapper">
                  <p class="tab-status">Loading revealed solution…</p>
                </div>
              } @else {
                @if (revealedPattern(); as pattern) {
                  <div class="monaco-wrapper">
                    <ngx-monaco-editor
                      [options]="revealedOptions()"
                      [model]="revealedModel()"
                    />
                  </div>
                  <div class="revealed-meta revealed-meta-bottom">
                    <strong>{{ pattern.name }}</strong>
                    <span>{{ pattern.intent }}</span>
                  </div>
                } @else {
                  <div class="monaco-wrapper">
                    <p class="tab-status">Click "Reveal pattern" to unlock the revealed solution.</p>
                  </div>
                }
              }
            }
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
        @if (result()) {
          <div class="results-panel">
            <h2>Result</h2>
            <p class="score">Score: {{ result()!.score }}%</p>
            <p class="feedback">{{ result()!.feedback }}</p>
          </div>
        }
      }
    </div>
  `, styles: ["\n    .refactor-page {\n      font-family: system-ui, sans-serif;\n      padding: 1rem;\n      max-width: 1400px;\n      margin: 0 auto;\n    }\n    .refactor-header {\n      margin-bottom: 1rem;\n    }\n    .back-link {\n      display: inline-block;\n      margin-bottom: 0.5rem;\n      color: #0066cc;\n      text-decoration: none;\n    }\n    .back-link:hover {\n      text-decoration: underline;\n    }\n    .refactor-header h1 {\n      font-size: 1.25rem;\n      margin: 0;\n    }\n    .error-detail, .loading {\n      color: #721c24;\n    }\n    .editors-row {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      gap: 1rem;\n      min-height: 400px;\n    }\n    @media (max-width: 768px) {\n      .editors-row {\n        grid-template-columns: 1fr;\n      }\n    }\n    .editor-pane {\n      display: flex;\n      flex-direction: column;\n      border: 1px solid #ddd;\n      border-radius: 8px;\n      overflow: hidden;\n    }\n    .pane-label {\n      padding: 0.5rem 0.75rem;\n      background: #f5f5f5;\n      font-size: 0.875rem;\n      font-weight: 500;\n      margin: 0;\n    }\n    .pane-tabs {\n      display: flex;\n      gap: 0.4rem;\n      padding: 0.4rem 0.5rem;\n      background: #f5f5f5;\n      border-bottom: 1px solid #ddd;\n    }\n    .pane-tab {\n      padding: 0.35rem 0.7rem;\n      border: 1px solid #d9d9d9;\n      background: #fff;\n      color: #444;\n      border-radius: 6px;\n      cursor: pointer;\n      font-size: 0.86rem;\n    }\n    .pane-tab:hover:not(:disabled) {\n      background: #f0f0f0;\n    }\n    .pane-tab.active {\n      background: #e8f1ff;\n      border-color: #b9d2f5;\n      color: #15457d;\n      font-weight: 500;\n    }\n    .pane-tab:disabled {\n      opacity: 0.6;\n      cursor: not-allowed;\n    }\n    .monaco-wrapper {\n      flex: 1;\n      height: 360px;\n      min-height: 360px;\n    }\n    .monaco-wrapper ngx-monaco-editor {\n      display: block;\n      height: 100%;\n    }\n    .monaco-wrapper ::ng-deep .monaco-editor {\n      height: 360px;\n      min-height: 360px;\n    }\n    .actions {\n      margin-top: 1rem;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: 0.75rem;\n    }\n    .actions-left {\n      display: flex;\n      align-items: center;\n      gap: 0.5rem;\n      flex-wrap: wrap;\n      flex: 1;\n    }\n    .actions-right {\n      display: flex;\n      align-items: center;\n      gap: 0.5rem;\n      flex-wrap: wrap;\n      justify-content: flex-start;\n      flex: 1;\n    }\n    .submit-btn {\n      padding: 0.5rem 1.25rem;\n      font-size: 1rem;\n      background: #0066cc;\n      color: white;\n      border: none;\n      border-radius: 6px;\n      cursor: pointer;\n    }\n    .submit-btn:hover:not(:disabled) {\n      background: #0052a3;\n    }\n    .submit-btn:disabled {\n      opacity: 0.6;\n      cursor: not-allowed;\n    }\n    .submit-btn-right {\n      margin-left: auto;\n    }\n    .generate-btn {\n      padding: 0.5rem 1rem;\n      margin-right: 0.5rem;\n      font-size: 0.95rem;\n      background: #f5f5f5;\n      color: #333;\n      border: 1px solid #ddd;\n      border-radius: 6px;\n      cursor: pointer;\n    }\n    .generate-btn:hover:not(:disabled) {\n      background: #ececec;\n    }\n    .generate-btn:disabled {\n      opacity: 0.6;\n      cursor: not-allowed;\n    }\n    .hint-btn {\n      padding: 0.5rem 1rem;\n      font-size: 0.95rem;\n      background: #f5f5f5;\n      color: #333;\n      border: 1px solid #ddd;\n      border-radius: 6px;\n      cursor: pointer;\n    }\n    .hint-btn:hover {\n      background: #ececec;\n    }\n    .reveal-btn {\n      padding: 0.5rem 1rem;\n      font-size: 0.95rem;\n      background: #f5f5f5;\n      color: #333;\n      border: 1px solid #ddd;\n      border-radius: 6px;\n      cursor: pointer;\n    }\n    .reveal-btn:hover:not(:disabled) {\n      background: #ececec;\n    }\n    .reveal-btn:disabled {\n      opacity: 0.6;\n      cursor: not-allowed;\n    }\n    .hint-panel {\n      margin-top: 0.75rem;\n      padding: 0.75rem 0.9rem;\n      background: #fff8e8;\n      border: 1px solid #f0d79a;\n      border-radius: 8px;\n      color: #5f4708;\n      font-size: 0.95rem;\n    }\n    .tab-status {\n      margin: 0;\n      padding: 1rem;\n      color: #555;\n      font-size: 0.92rem;\n    }\n    .revealed-meta {\n      padding: 0.6rem 0.8rem 0.4rem 0.8rem;\n      border-bottom: 1px solid #eee;\n      background: #fafafa;\n      display: flex;\n      flex-direction: column;\n      gap: 0.2rem;\n      font-size: 0.86rem;\n      color: #555;\n    }\n    .revealed-meta strong {\n      color: #222;\n      font-size: 0.92rem;\n    }\n    .revealed-meta-bottom {\n      border-top: 1px solid #eee;\n      border-bottom: none;\n    }\n    @media (max-width: 768px) {\n      .actions {\n        align-items: flex-start;\n      }\n      .actions-right {\n        justify-content: flex-start;\n      }\n    }\n    .results-panel {\n      margin-top: 1.5rem;\n      padding: 1rem;\n      background: #f5f5f5;\n      border-radius: 8px;\n    }\n    .results-panel h2 {\n      font-size: 1rem;\n      margin: 0 0 0.5rem 0;\n    }\n    .results-panel .score {\n      font-weight: 500;\n      margin: 0 0 0.5rem 0;\n    }\n    .results-panel .feedback {\n      margin: 0;\n      white-space: pre-wrap;\n    }\n  "] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RefactorComponent, { className: "RefactorComponent", filePath: "src\\app\\pages\\refactor\\refactor.component.ts", lineNumber: 371 }); })();
//# sourceMappingURL=refactor.component.js.map