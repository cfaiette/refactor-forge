import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import type { PatternListItem, PatternReveal } from '../models/api.types';

@Injectable({ providedIn: 'root' })
export class PatternsService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/api/patterns`;

  list(): Observable<PatternListItem[]> {
    return this.http.get<PatternListItem[]>(this.baseUrl);
  }

  reveal(patternId: number): Observable<PatternReveal> {
    return this.http.get<PatternReveal>(`${this.baseUrl}/${patternId}/reveal`);
  }
}
