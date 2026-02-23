import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import * as i0 from "@angular/core";
const _c0 = () => ({ exact: true });
export class AppComponent {
    static { this.ɵfac = function AppComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 18, vars: 2, consts: [[1, "app-layout"], [1, "app-header"], ["routerLink", "/", 1, "app-logo"], [1, "app-nav"], ["routerLink", "/", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/challenges", "routerLinkActive", "active"], ["routerLink", "/status", "routerLinkActive", "active"], [1, "app-main"], [1, "app-footer"], [1, "app-footer-text"], ["routerLink", "/status", 1, "app-footer-link"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "header", 1)(2, "a", 2);
            i0.ɵɵtext(3, "RefactorForge");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "nav", 3)(5, "a", 4);
            i0.ɵɵtext(6, "Dashboard");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "a", 5);
            i0.ɵɵtext(8, "Challenges");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "a", 6);
            i0.ɵɵtext(10, "Status");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(11, "main", 7);
            i0.ɵɵelement(12, "router-outlet");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "footer", 8)(14, "span", 9);
            i0.ɵɵtext(15, "RefactorForge");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "a", 10);
            i0.ɵɵtext(17, "System status");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("routerLinkActiveOptions", i0.ɵɵpureFunction0(1, _c0));
        } }, dependencies: [RouterLink, RouterLinkActive, RouterOutlet], styles: [".app-layout[_ngcontent-%COMP%] {\r\n  font-family: system-ui, sans-serif;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.app-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  gap: 1rem;\r\n  padding: 1rem 1.5rem;\r\n  background: #1a1a1a;\r\n  color: #fff;\r\n}\r\n\r\n.app-logo[_ngcontent-%COMP%] {\r\n  font-size: 1.25rem;\r\n  font-weight: 700;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  letter-spacing: -0.02em;\r\n}\r\n\r\n.app-logo[_ngcontent-%COMP%]:hover {\r\n  color: #ccc;\r\n}\r\n\r\n.app-nav[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.app-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #ccc;\r\n  text-decoration: none;\r\n  font-size: 0.9375rem;\r\n}\r\n\r\n.app-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \r\n.app-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n}\r\n\r\n.app-main[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n}\r\n\r\n.app-footer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  gap: 0.5rem;\r\n  padding: 1rem 1.5rem;\r\n  background: #f5f5f5;\r\n  border-top: 1px solid #e0e0e0;\r\n  font-size: 0.875rem;\r\n  color: #666;\r\n}\r\n\r\n.app-footer-text[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n}\r\n\r\n.app-footer-link[_ngcontent-%COMP%] {\r\n  color: #0066cc;\r\n  text-decoration: none;\r\n}\r\n\r\n.app-footer-link[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline;\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'app-root', standalone: true, imports: [RouterLink, RouterLinkActive, RouterOutlet], template: `
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
  `, styles: [".app-layout {\r\n  font-family: system-ui, sans-serif;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.app-header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  gap: 1rem;\r\n  padding: 1rem 1.5rem;\r\n  background: #1a1a1a;\r\n  color: #fff;\r\n}\r\n\r\n.app-logo {\r\n  font-size: 1.25rem;\r\n  font-weight: 700;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  letter-spacing: -0.02em;\r\n}\r\n\r\n.app-logo:hover {\r\n  color: #ccc;\r\n}\r\n\r\n.app-nav {\r\n  display: flex;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.app-nav a {\r\n  color: #ccc;\r\n  text-decoration: none;\r\n  font-size: 0.9375rem;\r\n}\r\n\r\n.app-nav a:hover,\r\n.app-nav a.active {\r\n  color: #fff;\r\n}\r\n\r\n.app-main {\r\n  flex: 1;\r\n}\r\n\r\n.app-footer {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  gap: 0.5rem;\r\n  padding: 1rem 1.5rem;\r\n  background: #f5f5f5;\r\n  border-top: 1px solid #e0e0e0;\r\n  font-size: 0.875rem;\r\n  color: #666;\r\n}\r\n\r\n.app-footer-text {\r\n  font-weight: 500;\r\n}\r\n\r\n.app-footer-link {\r\n  color: #0066cc;\r\n  text-decoration: none;\r\n}\r\n\r\n.app-footer-link:hover {\r\n  text-decoration: underline;\r\n}\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 29 }); })();
//# sourceMappingURL=app.component.js.map