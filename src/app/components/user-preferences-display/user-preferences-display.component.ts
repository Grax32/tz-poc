import { Component } from '@angular/core';
import { UserPreferencesComponent } from "../user-preferences/user-preferences.component";

@Component({
    selector: 'app-user-preferences-display',
    templateUrl: './user-preferences-display.component.html',
    styleUrls: ['./user-preferences-display.component.scss'],
})
export class UserPreferencesDisplayComponent {

    public selectedTimezone = this.userPreferencesComponent.selectedTimezone;

    constructor(private userPreferencesComponent: UserPreferencesComponent
    ) {
    }

}
