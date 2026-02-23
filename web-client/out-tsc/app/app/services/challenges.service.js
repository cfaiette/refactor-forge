import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as i0 from "@angular/core";
export class ChallengesService {
    constructor() {
        this.http = inject(HttpClient);
        this.baseUrl = `${environment.apiUrl}/api/challenges`;
    }
    list() {
        return this.http.get(this.baseUrl);
    }
    getById(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    create(patternId) {
        return this.http.post(this.baseUrl, { pattern_id: patternId });
    }
    generateVariation(patternName, language, difficulty) {
        return this.http.post(`${this.baseUrl}/generate`, {
            pattern_name: patternName,
            language,
            difficulty,
        });
    }
    static { this.ɵfac = function ChallengesService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ChallengesService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ChallengesService, factory: ChallengesService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChallengesService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=challenges.service.js.map