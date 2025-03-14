import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
//ahora en versiones nuevas. para traer datos, por ejemplo de una api es en config.ts importando
// provideHttpClient() en providers en vez de hhtpclientmodule en appmodule

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideHttpClient()
  ]
};
