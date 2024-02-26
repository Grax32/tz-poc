import { Component, OnDestroy } from '@angular/core';
import { Subject } from "rxjs";
import { TimeZoneService } from "src/app/services/timezone.service";
import { UserPreferencesComponent } from "../user-preferences/user-preferences.component";

@Component({
    selector: 'app-user-preferences-editor',
    templateUrl: './user-preferences-editor.component.html',
    styleUrls: ['./user-preferences-editor.component.scss'],
})
export class UserPreferencesEditorComponent implements OnDestroy {
    private destroy = new Subject<void>();

    public timezones = this.timeZoneService.getTimezones();

    constructor(private timeZoneService: TimeZoneService,
        private userPreferencesComponent: UserPreferencesComponent
    )  {
    }

    ngOnDestroy(): void {
        this.destroy.next();
        this.destroy.complete();
    }

    public selectTimezone(tz: string) {
        const fixedTz = this.timeZoneService.findMatchingValidTimezone(tz);

        if (fixedTz) {
            this.userPreferencesComponent.selectTimezone(fixedTz);
        }
    }

    public filterTimezones(query: string) {
        this.timezones = this.timeZoneService.getTimezones(query);
    }
}
