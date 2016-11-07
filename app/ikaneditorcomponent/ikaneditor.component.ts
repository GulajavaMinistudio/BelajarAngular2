/**
 * Created by kucingmint on 11/2/16.
 */

import {Component} from "@angular/core";

export class Ikan {
    id: number;
    detail: string;
}

@Component ({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'ikaneditorinput.component.html',
    styleUrls: ['ikaneditor.component.css']
})

export class IkanEditorComponent {
    nama_ikan = "Ikan Mas Koki";
    ikan: Ikan = {
        id: 23,
        detail: "Ikan mas koki yang berwarna emas"
    };
    sirip_ikan = "Tipe sirip ikan"
}