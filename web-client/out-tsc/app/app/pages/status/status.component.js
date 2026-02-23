import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
function StatusComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵtext(1, "Checking\u2026");
    i0.ɵɵelementEnd();
} }
function StatusComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵtext(1, "OK");
    i0.ɵɵelementEnd();
} }
function StatusComponent_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 8);
    i0.ɵɵtext(1, "Error");
    i0.ɵɵelementEnd();
} }
function StatusComponent_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.backendError());
} }
export class StatusComponent {
    constructor() {
        this.http = inject(HttpClient);
        this.backendStatus = signal('loading');
        this.backendError = signal(null);
        this.checkBackend();
    }
    formatBackendError(err) {
        if (err?.status === 0) {
            return `Backend unreachable at ${environment.apiUrl}. Start it with: docker compose up (or php artisan serve in backend/)`;
        }
        const body = err?.error;
        return body?.message ?? err?.message ?? (err?.status != null ? String(err.status) : 'Request failed');
    }
    checkBackend() {
        const url = `${environment.apiUrl}/api/status`;
        this.http.get(url).subscribe({
            next: () => this.backendStatus.set('ok'),
            error: (err) => {
                this.backendStatus.set('error');
                const msg = this.formatBackendError(err);
                this.backendError.set(msg);
            },
        });
    }
    static { this.ɵfac = function StatusComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StatusComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StatusComponent, selectors: [["app-status"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 18, vars: 2, consts: [[1, "status-page"], ["routerLink", "/", 1, "nav-link"], [1, "status-list"], [1, "status-item", "frontend"], [1, "label"], [1, "badge", "ok"], [1, "status-item", "backend"], [1, "badge", "loading"], [1, "badge", "error"], [1, "error-detail"]], template: function StatusComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h1");
            i0.ɵɵtext(2, "RefactorForge Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "a", 1);
            i0.ɵɵtext(4, "\u2190 Back to dashboard");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "ul", 2)(6, "li", 3)(7, "span", 4);
            i0.ɵɵtext(8, "Frontend");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "span", 5);
            i0.ɵɵtext(10, "OK");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "li", 6)(12, "span", 4);
            i0.ɵɵtext(13, "Backend");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(14, StatusComponent_Conditional_14_Template, 2, 0, "span", 7)(15, StatusComponent_Conditional_15_Template, 2, 0, "span", 5)(16, StatusComponent_Conditional_16_Template, 2, 0, "span", 8);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(17, StatusComponent_Conditional_17_Template, 2, 1, "p", 9);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(14);
            i0.ɵɵconditional(ctx.backendStatus() === "loading" ? 14 : ctx.backendStatus() === "ok" ? 15 : 16);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.backendError() ? 17 : -1);
        } }, styles: [".status-page[_ngcontent-%COMP%] {\n      font-family: system-ui, sans-serif;\n      max-width: 360px;\n      margin: 3rem auto;\n      padding: 1.5rem;\n    }\n    h1[_ngcontent-%COMP%] {\n      font-size: 1.5rem;\n      margin-bottom: 0.5rem;\n    }\n    .nav-link[_ngcontent-%COMP%] {\n      display: inline-block;\n      margin-bottom: 1.5rem;\n      color: #0066cc;\n      text-decoration: none;\n    }\n    .nav-link[_ngcontent-%COMP%]:hover {\n      text-decoration: underline;\n    }\n    .status-list[_ngcontent-%COMP%] {\n      list-style: none;\n      padding: 0;\n      margin: 0;\n    }\n    .status-item[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding: 0.75rem 1rem;\n      margin-bottom: 0.5rem;\n      background: #f5f5f5;\n      border-radius: 8px;\n    }\n    .label[_ngcontent-%COMP%] {\n      font-weight: 500;\n    }\n    .badge[_ngcontent-%COMP%] {\n      padding: 0.25rem 0.5rem;\n      border-radius: 4px;\n      font-size: 0.875rem;\n    }\n    .badge.ok[_ngcontent-%COMP%] {\n      background: #d4edda;\n      color: #155724;\n    }\n    .badge.loading[_ngcontent-%COMP%] {\n      background: #fff3cd;\n      color: #856404;\n    }\n    .badge.error[_ngcontent-%COMP%] {\n      background: #f8d7da;\n      color: #721c24;\n    }\n    .error-detail[_ngcontent-%COMP%] {\n      margin-top: 1rem;\n      font-size: 0.875rem;\n      color: #721c24;\n    }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StatusComponent, [{
        type: Component,
        args: [{ selector: 'app-status', standalone: true, template: `
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
  `, styles: ["\n    .status-page {\n      font-family: system-ui, sans-serif;\n      max-width: 360px;\n      margin: 3rem auto;\n      padding: 1.5rem;\n    }\n    h1 {\n      font-size: 1.5rem;\n      margin-bottom: 0.5rem;\n    }\n    .nav-link {\n      display: inline-block;\n      margin-bottom: 1.5rem;\n      color: #0066cc;\n      text-decoration: none;\n    }\n    .nav-link:hover {\n      text-decoration: underline;\n    }\n    .status-list {\n      list-style: none;\n      padding: 0;\n      margin: 0;\n    }\n    .status-item {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding: 0.75rem 1rem;\n      margin-bottom: 0.5rem;\n      background: #f5f5f5;\n      border-radius: 8px;\n    }\n    .label {\n      font-weight: 500;\n    }\n    .badge {\n      padding: 0.25rem 0.5rem;\n      border-radius: 4px;\n      font-size: 0.875rem;\n    }\n    .badge.ok {\n      background: #d4edda;\n      color: #155724;\n    }\n    .badge.loading {\n      background: #fff3cd;\n      color: #856404;\n    }\n    .badge.error {\n      background: #f8d7da;\n      color: #721c24;\n    }\n    .error-detail {\n      margin-top: 1rem;\n      font-size: 0.875rem;\n      color: #721c24;\n    }\n  "] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StatusComponent, { className: "StatusComponent", filePath: "src\\app\\pages\\status\\status.component.ts", lineNumber: 100 }); })();
//# sourceMappingURL=status.component.js.map