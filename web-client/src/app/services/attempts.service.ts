import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import type { AttemptResult } from '../models/api.types';

@Injectable({ providedIn: 'root' })
export class AttemptsService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/api/attempts`;

  submit(challengeId: number, submittedCode: string): Observable<AttemptResult> {
    return this.http.post<AttemptResult>(this.baseUrl, {
      challenge_id: challengeId,
      submitted_code: submittedCode,
    });
  }
}
