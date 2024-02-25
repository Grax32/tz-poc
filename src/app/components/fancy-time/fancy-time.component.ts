import { Component } from '@angular/core';
import { AutoComplete, AutoCompleteCompleteEvent, AutoCompleteOnSelectEvent } from 'primeng/autocomplete';

const timezones = Intl.supportedValuesOf('timeZone');
timezones.push('UTC');

function timezoneNormalize(tz: string): string {
    return tz
        .toLowerCase()
        .replace(/[ _/\\]/g, '_');
}

function timezoneMatches(tz1: string, tz2: string): boolean {
    return timezoneNormalize(tz1) === timezoneNormalize(tz2);
}

function timezonePartialMatches(tz: string, tzSearch: string): boolean {
    return timezoneNormalize(tz).includes(timezoneNormalize(tzSearch));
}

function findMatchingValidTimezone(tzSearch: string): string | undefined {
    return timezones.find(tz => timezoneMatches(tz, tzSearch));
}

@Component({
    selector: 'app-fancy-time',
    templateUrl: './fancy-time.component.html',
    styleUrls: ['./fancy-time.component.scss']
})
export class FancyTimeComponent {

    public dateTime: string = new Date().toISOString();

    public zoneList: string[] = [...timezones];

    public enableAddZone: boolean = false;
    public zones: string[] = ['UTC'];

    public showAddZone() {
        this.enableAddZone = true;
    }

    public hideAddZone() {
        this.enableAddZone = false;
    }

    public selectZone(ctrl: AutoComplete, evt: AutoCompleteOnSelectEvent) {
        const tz = evt.value;
        const zone = findMatchingValidTimezone(tz);

        if (zone) {

            setTimeout(() => {
                this.hideAddZone();
                this.zones.push(zone);
                ctrl.clear();
            }, 100);

        }
    }

    public filterCountry(acce: AutoCompleteCompleteEvent) {
        this.zoneList = timezones
            .filter(tz => timezonePartialMatches(tz, acce.query))
            .filter(tz => !this.zones.includes(tz));
    }

}
