import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import type { Challenge, ChallengeListItem, GeneratedChallengeVariation } from '../models/api.types';

@Injectable({ providedIn: 'root' })
export class ChallengesService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/api/challenges`;

  list(): Observable<ChallengeListItem[]> {
    return this.http.get<ChallengeListItem[]>(this.baseUrl);
  }

  getById(id: number): Observable<Challenge> {
    return this.http.get<Challenge>(`${this.baseUrl}/${id}`);
  }

  create(patternId: number): Observable<Challenge> {
    return this.http.post<Challenge>(this.baseUrl, { pattern_id: patternId });
  }

  generateVariation(patternName: string, language: string, difficulty: string): Observable<GeneratedChallengeVariation> {
    return this.http.post<GeneratedChallengeVariation>(`${this.baseUrl}/generate`, {
      pattern_name: patternName,
      language,
      difficulty,
    });
  }
}
