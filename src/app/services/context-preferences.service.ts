import { Injectable, Optional } from "@angular/core";
import { AppComponent } from "../app.component";
import { UserPreferencesComponent } from "../components/user-preferences/user-preferences.component";
import { IUserPreferences } from "../interfaces/preferences.interface";

@Injectable()
export class ContextPreferencesService {
    constructor(private appComponent: AppComponent,
        @Optional() private userPreferencesComponent?: UserPreferencesComponent) {
    }

    public getPreferences(): IUserPreferences {
        return this.userPreferencesComponent ?? this.appComponent;
    }
}
