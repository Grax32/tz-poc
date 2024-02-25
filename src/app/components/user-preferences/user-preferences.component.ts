import { Component } from '@angular/core';
import { IUserPreferences } from 'src/app/interfaces/preferences.interface';

@Component({
    selector: 'app-user-preferences',
    templateUrl: './user-preferences.component.html',
    styleUrls: ['./user-preferences.component.css']
})
export class UserPreferencesComponent implements IUserPreferences {
    public name: string = 'John Doe (User Preferences Component)';

}
