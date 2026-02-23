export interface ChallengeListItem {
  id: number;
  title: string;
  expected_pattern: string;
  difficulty: string;
  language: string;
}

export interface Challenge {
  id: number;
  pattern_id: number;
  title: string;
  language: string;
  messy_code: string;
  expected_pattern: string;
  difficulty: string;
}

export interface GeneratedChallengeVariation {
  title: string;
  messy_code: string;
  language: string;
  pattern_name: string;
}

export interface AttemptResult {
  score: number;
  feedback: string;
}

export interface PatternListItem {
  id: number;
  name: string;
}

export interface PatternReveal {
  name: string;
  intent: string;
  when_to_use: string;
  example_solution: string;
}
