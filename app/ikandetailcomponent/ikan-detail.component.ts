/**
 * Created by kucingmint on 11/7/16.
 */


import {Component, Input} from "@angular/core";
import {IkanDetailItem} from "./ikan-detail";

@Component ({
    moduleId: module.id,
    selector: "detail-ikan-page",
    templateUrl: "ikan-detail.component.html",
    styleUrls: ["daftarikan.component.css"]
})

export class IkanDetailComponent {
    @Input()
    ikan_detail_items: IkanDetailItem;
}