// >> using-ngif-code
import { Component } from "@angular/core";

@Component({
    templateUrl: "ui-category/ng-directives/ngif-directive/ngif-directive.component.html",
})
export class NgIfComponent {
    public isVisible: boolean = true;

    onTap() {
        if (this.isVisible) {
            this.isVisible = false;
        } else  {
            this.isVisible = true;
        }
    }
}
// << using-ngif-code
