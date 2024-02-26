import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public container1show = true;
    public container2show = false;

    public time = (new Date()).toISOString();
    public updateTime() {
        this.time = (new Date()).toISOString();
        console.log('time updated', this.time);
    }
}