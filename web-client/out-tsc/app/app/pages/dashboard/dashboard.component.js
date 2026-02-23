import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
export class DashboardComponent {
    static { this.ɵfac = function DashboardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 23, vars: 0, consts: [[1, "dashboard"], [1, "dashboard-header"], [1, "tagline"], [1, "dashboard-main"], [1, "hero"], [1, "hero-text"], ["routerLink", "/challenges", 1, "cta-button"], [1, "links"], ["routerLink", "/challenges", 1, "card"], [1, "card-title"], [1, "card-desc"], ["routerLink", "/status", 1, "card", "card-muted"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "header", 1)(2, "h1");
            i0.ɵɵtext(3, "RefactorForge");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p", 2);
            i0.ɵɵtext(5, "Practice refactoring with design patterns");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "main", 3)(7, "section", 4)(8, "p", 5);
            i0.ɵɵtext(9, " Refactor small, messy code samples and get instant feedback. Choose a pattern, improve the code, and submit for evaluation. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "a", 6);
            i0.ɵɵtext(11, "Browse challenges");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "section", 7)(13, "a", 8)(14, "span", 9);
            i0.ɵɵtext(15, "Challenges");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "span", 10);
            i0.ɵɵtext(17, "Select a pattern to implement and start refactoring");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "a", 11)(19, "span", 9);
            i0.ɵɵtext(20, "System status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "span", 10);
            i0.ɵɵtext(22, "Check backend and frontend connectivity");
            i0.ɵɵelementEnd()()()()();
        } }, dependencies: [RouterLink], styles: [".dashboard[_ngcontent-%COMP%] {\n      font-family: system-ui, sans-serif;\n      max-width: 640px;\n      margin: 0 auto;\n      padding: 2rem 1.5rem;\n      min-height: 100vh;\n      display: flex;\n      flex-direction: column;\n    }\n    .dashboard-header[_ngcontent-%COMP%] {\n      margin-bottom: 2rem;\n    }\n    .dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      font-size: 2rem;\n      font-weight: 700;\n      margin: 0 0 0.25rem 0;\n      letter-spacing: -0.02em;\n    }\n    .tagline[_ngcontent-%COMP%] {\n      color: #666;\n      font-size: 1rem;\n      margin: 0;\n    }\n    .dashboard-main[_ngcontent-%COMP%] {\n      flex: 1;\n    }\n    .hero[_ngcontent-%COMP%] {\n      background: #f5f5f5;\n      border-radius: 12px;\n      padding: 1.5rem;\n      margin-bottom: 2rem;\n    }\n    .hero-text[_ngcontent-%COMP%] {\n      margin: 0 0 1.25rem 0;\n      line-height: 1.5;\n      color: #333;\n    }\n    .cta-button[_ngcontent-%COMP%] {\n      display: inline-block;\n      padding: 0.625rem 1.25rem;\n      background: #0066cc;\n      color: white;\n      text-decoration: none;\n      font-weight: 500;\n      border-radius: 8px;\n    }\n    .cta-button[_ngcontent-%COMP%]:hover {\n      background: #0052a3;\n    }\n    .links[_ngcontent-%COMP%] {\n      display: grid;\n      gap: 1rem;\n    }\n    .card[_ngcontent-%COMP%] {\n      display: block;\n      padding: 1rem 1.25rem;\n      border: 1px solid #e0e0e0;\n      border-radius: 10px;\n      text-decoration: none;\n      color: inherit;\n      transition: border-color 0.15s, background 0.15s;\n    }\n    .card[_ngcontent-%COMP%]:hover {\n      border-color: #0066cc;\n      background: #fafafa;\n    }\n    .card-muted[_ngcontent-%COMP%] {\n      border-color: #eee;\n    }\n    .card-muted[_ngcontent-%COMP%]   .card-desc[_ngcontent-%COMP%] {\n      color: #888;\n    }\n    .card-title[_ngcontent-%COMP%] {\n      display: block;\n      font-weight: 600;\n      margin-bottom: 0.25rem;\n    }\n    .card-desc[_ngcontent-%COMP%] {\n      font-size: 0.875rem;\n      color: #666;\n      margin: 0;\n    }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardComponent, [{
        type: Component,
        args: [{ selector: 'app-dashboard', standalone: true, imports: [RouterLink], template: `
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
  `, styles: ["\n    .dashboard {\n      font-family: system-ui, sans-serif;\n      max-width: 640px;\n      margin: 0 auto;\n      padding: 2rem 1.5rem;\n      min-height: 100vh;\n      display: flex;\n      flex-direction: column;\n    }\n    .dashboard-header {\n      margin-bottom: 2rem;\n    }\n    .dashboard-header h1 {\n      font-size: 2rem;\n      font-weight: 700;\n      margin: 0 0 0.25rem 0;\n      letter-spacing: -0.02em;\n    }\n    .tagline {\n      color: #666;\n      font-size: 1rem;\n      margin: 0;\n    }\n    .dashboard-main {\n      flex: 1;\n    }\n    .hero {\n      background: #f5f5f5;\n      border-radius: 12px;\n      padding: 1.5rem;\n      margin-bottom: 2rem;\n    }\n    .hero-text {\n      margin: 0 0 1.25rem 0;\n      line-height: 1.5;\n      color: #333;\n    }\n    .cta-button {\n      display: inline-block;\n      padding: 0.625rem 1.25rem;\n      background: #0066cc;\n      color: white;\n      text-decoration: none;\n      font-weight: 500;\n      border-radius: 8px;\n    }\n    .cta-button:hover {\n      background: #0052a3;\n    }\n    .links {\n      display: grid;\n      gap: 1rem;\n    }\n    .card {\n      display: block;\n      padding: 1rem 1.25rem;\n      border: 1px solid #e0e0e0;\n      border-radius: 10px;\n      text-decoration: none;\n      color: inherit;\n      transition: border-color 0.15s, background 0.15s;\n    }\n    .card:hover {\n      border-color: #0066cc;\n      background: #fafafa;\n    }\n    .card-muted {\n      border-color: #eee;\n    }\n    .card-muted .card-desc {\n      color: #888;\n    }\n    .card-title {\n      display: block;\n      font-weight: 600;\n      margin-bottom: 0.25rem;\n    }\n    .card-desc {\n      font-size: 0.875rem;\n      color: #666;\n      margin: 0;\n    }\n  "] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\pages\\dashboard\\dashboard.component.ts", lineNumber: 119 }); })();
//# sourceMappingURL=dashboard.component.js.map