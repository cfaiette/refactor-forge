import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as i0 from "@angular/core";
export class PatternsService {
    constructor() {
        this.http = inject(HttpClient);
        this.baseUrl = `${environment.apiUrl}/api/patterns`;
    }
    list() {
        return this.http.get(this.baseUrl);
    }
    reveal(patternId) {
        return this.http.get(`${this.baseUrl}/${patternId}/reveal`);
    }
    static { this.ɵfac = function PatternsService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PatternsService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PatternsService, factory: PatternsService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PatternsService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=patterns.service.js.map