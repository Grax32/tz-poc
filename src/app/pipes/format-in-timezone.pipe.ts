import { Pipe, PipeTransform } from '@angular/core';
import { format, utcToZonedTime, toDate } from 'date-fns-tz';

@Pipe({
    name: 'formatInTimezone'
})
export class FormatInTimezonePipe implements PipeTransform {
    private format: string = 'yyyy-MM-dd h:mm a z';

    public transform(dateTime: string, zone: string): string {

        if (!dateTime) {
            return '';
        }

        if (dateTime.toLowerCase() === 'now') {
            dateTime = new Date().toISOString();
        }

        const dt = toDate(dateTime);
        if (dt.toString() === 'Invalid Date') {
            return 'Invalid Date';
        }


        const zonedTime: Date = utcToZonedTime(dateTime, zone);

        if (isNaN(zonedTime as any)) {
            return 'Invalid Time Zone ' + zone;
        }

        return format(zonedTime, this.format, { timeZone: zone });

    }
}


