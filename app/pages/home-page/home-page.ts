import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {ScientificFactsPage} from "../scientific-facts-page/scientific-facts-page";
import {Jsonix} from "../../node_modules/jsonix/jsonix";

@Component({
    templateUrl: 'build/pages/home-page/home-page.html'
})
export class HomePage {
    
    constructor(private _navController:NavController) {

        var context = new Jsonix.Context(["XSD/generated/model"]);
        var unmarshaller = context.createUnmarshaller();
    }

    goToFactsPage() {
        this._navController.push(ScientificFactsPage);
    }
}
