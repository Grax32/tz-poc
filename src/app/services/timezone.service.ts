import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TimeZoneService {

    private timezones = [...Intl.supportedValuesOf('timeZone'), 'UTC'];

    public getTimezones(filter: string = ''): string[] {
        if (filter) {
            return this.timezones
                .filter(tz => this.timezonePartialMatches(tz, filter));
        }

        return [... this.timezones];
    }

    public timezoneNormalize(tz: string): string {
        return tz
            .toLowerCase()
            .replace(/[ _/\\]/g, '_');
    }

    public timezoneMatches(tz1: string, tz2: string): boolean {
        return this.timezoneNormalize(tz1) === this.timezoneNormalize(tz2);
    }

    public findMatchingValidTimezone(tzSearch: string): string | undefined {
        return this.timezones.find(tz => this.timezoneMatches(tz, tzSearch));
    }

    public timezonePartialMatches(tz: string, tzSearch: string): boolean {
        return this.timezoneNormalize(tz).includes(this.timezoneNormalize(tzSearch));
    }

    public validateTimezone(tz: string): boolean {
        return this.timezones.includes(tz);
    }
}