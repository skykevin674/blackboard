// Angular Imports
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// This Module's Components
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register.routing';

@NgModule({
    imports: [
        RegisterRoutingModule, FormsModule
    ],
    declarations: [
        RegisterComponent,
    ],
    exports: [
        RegisterComponent,
    ]
})
export class RegisterModule {

}
