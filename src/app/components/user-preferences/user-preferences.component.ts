import { Component, OnDestroy, Optional, SkipSelf } from '@angular/core';
import { TimeZoneService } from '../../services/timezone.service';
import { BehaviorSubject, Subject, take, takeUntil, takeWhile } from 'rxjs';

@Component({
    selector: 'app-user-preferences',
    templateUrl: './user-preferences.component.html',
    styleUrls: ['./user-preferences.component.scss']
})
export class UserPreferencesComponent implements OnDestroy {
    private destroy = new Subject<void>();

    private hasTimezoneBeenSelected = false;
    private _selectedTimezone = new BehaviorSubject<string>('America/New_York');
    public get selectedTimezone() {
        return this._selectedTimezone.asObservable();
    }

    constructor(@Optional() @SkipSelf() parent: UserPreferencesComponent,
        private timeZoneService: TimeZoneService
    ) {
        // if we haven't made a selection at this level, pass through the parent's selection
        if (parent) {
            parent.selectedTimezone.pipe(
                takeUntil(this.destroy),
                takeWhile(() => !this.hasTimezoneBeenSelected)
            ).subscribe(tz => {
                if (!this.hasTimezoneBeenSelected) {
                    this._selectedTimezone.next(tz);
                }
            });
        }
    }

    ngOnDestroy(): void {
        this.destroy.next();
        this.destroy.complete();
    }

    public selectTimezone(tz: string) {
        const tzIsValid = this.timeZoneService.validateTimezone(tz);

        if (!tzIsValid) {
            throw new Error('Invalid Timezone');
        }

        this.hasTimezoneBeenSelected = true;
        this._selectedTimezone.next(tz);

    }
}
