import { Component, Input, OnChanges, OnDestroy, Optional, SimpleChanges, SkipSelf } from '@angular/core';
import { TimeZoneService } from '../../services/timezone.service';
import { BehaviorSubject, Subject, takeUntil, takeWhile } from 'rxjs';

const defaultTimezone = 'America/New_York';

@Component({
    selector: 'app-user-preferences',
    templateUrl: './user-preferences.component.html',
    styleUrls: ['./user-preferences.component.scss']
})
export class UserPreferencesComponent implements OnChanges, OnDestroy {
    private destroy = new Subject<void>();

    @Input() timezone?: string;

    private hasTimezoneBeenSelected = false;
    private _selectedTimezone = new BehaviorSubject<string>(defaultTimezone);
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

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['timezone']) {
            this.selectTimezone(this.timezone ?? defaultTimezone);
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
