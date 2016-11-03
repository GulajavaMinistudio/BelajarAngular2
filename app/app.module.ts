/**
 * Created by kucingmint on 11/1/16.
 */


import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HeroEditorComponent} from "./heroeditorcomponent/heroeditor.component";
import {IkanEditorComponent} from "./ikaneditorcomponent/ikaneditor.component";
import {IkanEditorComponentClass} from "./ikaneditorcomponent/ikaneditorclass.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [HeroEditorComponent, IkanEditorComponent, IkanEditorComponentClass],
    bootstrap: [IkanEditorComponent]
})

export class AppModule {
}