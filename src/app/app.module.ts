import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// import { HttpClientModule } from '@angular/common/http';
//ahora en versiones nuevas. para traer datos, por ejemplo de una api es en config.ts importando
// provideHttpClient() en providers en vez de hhtpclientmodule en appmodule
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    // HttpClientModule,
    AppComponent,
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule { }