import { Component } from '@angular/core';
import { IUserPreferences } from './interfaces/preferences.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements IUserPreferences {
    public name: string = 'John Doe (App Component)';

}