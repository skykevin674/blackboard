import { Component } from '@angular/core';
import { Api } from '../service/api';

@Component({
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.scss']
})
export class RegisterComponent {

    form = {
        username: null, password: null
    };

    constructor(private api: Api) {}

    register() {
        this.api.register(this.form).subscribe();
    }
}
