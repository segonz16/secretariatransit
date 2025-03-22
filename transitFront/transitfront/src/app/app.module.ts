import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { NavbarComponent } from './navbar/navbar.component';
import { HistoricoComponent } from './historico/historico.component';

@NgModule({
    declarations: [
        AppComponent,
        HistoricoComponent
    ],
})


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        NavbarComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
