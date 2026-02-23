import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as i0 from "@angular/core";
export class AttemptsService {
    constructor() {
        this.http = inject(HttpClient);
        this.baseUrl = `${environment.apiUrl}/api/attempts`;
    }
    submit(challengeId, submittedCode) {
        return this.http.post(this.baseUrl, {
            challenge_id: challengeId,
            submitted_code: submittedCode,
        });
    }
    static { this.ɵfac = function AttemptsService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AttemptsService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AttemptsService, factory: AttemptsService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AttemptsService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=attempts.service.js.map