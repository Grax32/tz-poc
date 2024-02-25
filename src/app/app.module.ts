import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FancyTimeComponent } from './components/fancy-time/fancy-time.component';
import { FormatInTimezonePipe } from './pipes/format-in-timezone.pipe';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { UserPreferencesComponent } from './components/user-preferences/user-preferences.component';
import { WhatsMyNameComponent } from './components/whats-my-name/whats-my-name.component';

@NgModule({
    declarations: [
        AppComponent,
        FormatInTimezonePipe,
        FancyTimeComponent,
        UserPreferencesComponent,
        WhatsMyNameComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        TooltipModule,
        AppRoutingModule,
        FormsModule,
        AutoCompleteModule,
        ButtonModule,
        DialogModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
