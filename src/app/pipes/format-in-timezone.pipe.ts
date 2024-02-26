import { OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { format, utcToZonedTime, toDate } from 'date-fns-tz';
import { UserPreferencesComponent } from '../components/user-preferences/user-preferences.component';
import { Observable, Subject, map, takeUntil } from 'rxjs';

const nbsp = '\u00A0';

@Pipe({
    name: 'formatInTimezone'
})
export class FormatInTimezonePipe implements PipeTransform, OnDestroy {

    private format: string = `yyyy${nbsp}MM${nbsp}dd h:mm${nbsp}a${nbsp}z`;
    private destroy = new Subject<void>();

    constructor(private userPreferencesComponent: UserPreferencesComponent) { }

    ngOnDestroy(): void {
        this.destroy.next();
        this.destroy.complete();
    }

    public transform(dateTime: string): Observable<string> {

        if (!dateTime) {
            const result = new Subject<string>();
            result.next('');
            return result.pipe(takeUntil(this.destroy));
        }

        if (dateTime.toLowerCase() === 'now') {
            dateTime = new Date().toISOString();
        }

        const result = this.userPreferencesComponent.selectedTimezone
            .pipe(
                takeUntil(this.destroy),
                map(zone => {

                    const dt = toDate(dateTime);
                    if (dt.toString() === 'Invalid Date') {
                        return 'Invalid Date';
                    }

                    const zonedTime: Date = utcToZonedTime(dateTime, zone);

                    if (isNaN(zonedTime as any)) {
                        return 'Invalid Time Zone ' + zone;
                    }

                    return format(zonedTime, this.format, { timeZone: zone });
                })
            );

        return result;
    }
}


