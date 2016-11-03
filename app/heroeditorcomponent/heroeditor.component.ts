/**
 * Created by kucingmint on 11/2/16.
 */

import {Component} from "@angular/core";


@Component ({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'heroeditor.html',
    styleUrls: ['heroeditor.component.css']
})

export class HeroEditorComponent {
    title = 'Judul Halaman';
    details = 'Isi halaman';
}