import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormatInTimezonePipe } from './pipes/format-in-timezone.pipe';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { UserPreferencesComponent } from './components/user-preferences/user-preferences.component';
import { UserPreferencesEditorComponent } from './components/user-preferences-editor/user-preferences-editor.component';
import { FormatInSpecifiedTimezonePipe } from './pipes/format-in-specified-timezone.pipe';

@NgModule({
    declarations: [
        AppComponent,
        FormatInTimezonePipe,
        FormatInSpecifiedTimezonePipe,
        UserPreferencesComponent,
        UserPreferencesEditorComponent
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
