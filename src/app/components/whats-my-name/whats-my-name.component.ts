import { Component } from '@angular/core';
import { IUserPreferences } from 'src/app/interfaces/preferences.interface';
import { ContextPreferencesService } from 'src/app/services/context-preferences.service';

@Component({
    selector: 'app-whats-my-name',
    templateUrl: './whats-my-name.component.html',
    styleUrls: ['./whats-my-name.component.scss'],
    providers: [ContextPreferencesService]
})
export class WhatsMyNameComponent {
    public name = 'bob';
    private preferences: IUserPreferences;

    constructor(prefService: ContextPreferencesService) {
        this.preferences = prefService.getPreferences();
        this.name = this.preferences.name;
    }
}
