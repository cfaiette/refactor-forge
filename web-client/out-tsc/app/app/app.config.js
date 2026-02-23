import { provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideMonacoEditor } from 'ngx-monaco-editor-v2';
import { routes } from './app.routes';
export const appConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideHttpClient(),
        provideMonacoEditor({ baseUrl: 'assets/monaco/min/vs' }),
    ],
};
//# sourceMappingURL=app.config.js.map