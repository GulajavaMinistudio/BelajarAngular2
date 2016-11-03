/**
 * Created by kucingmint on 11/2/16.
 */

import {Component} from "@angular/core";


export class IkanBesar {
    id_ikans: number;
    detail_nama_ikans: string;

    constructor(id_ikan: number, detail_nama_ikan: string) {
        this.id_ikans = id_ikan;
        this.detail_nama_ikans = detail_nama_ikan;
    }
}


@Component ({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'ikaneditor.component.html',
    styleUrls: ['ikaneditor.component.css']
})


export class IkanEditorComponentClass {
    nama_ikan = "Ikan Hiu";
    ikanBesarSekali = new IkanBesar(45, "Ikan Hiu yang besar sekali");
}