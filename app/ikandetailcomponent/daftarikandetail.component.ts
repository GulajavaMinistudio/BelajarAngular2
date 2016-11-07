import {Component} from "@angular/core";
import {IkanDetailItem} from "./ikan-detail";
/**
 * Created by kucingmint on 11/3/16.
 */



const listIkan: IkanDetailItem[] = [
    {id_detail_ikan: 10, nama_detail_ikan: "Ikan Koi"},
    {id_detail_ikan: 11, nama_detail_ikan: "Ikan Mas"},
    {id_detail_ikan: 12, nama_detail_ikan: "Ikan Mujair"},
    {id_detail_ikan: 13, nama_detail_ikan: "Ikan Mas Koi"},
    {id_detail_ikan: 14, nama_detail_ikan: "Ikan Hiu"}
];

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'daftarikan-detail.component.html',
    styleUrls: ['daftarikan.component.css']
})

export class DaftarIkanDetailComponent {
    judul_daftar_ikan = "Daftar Ikan";
    daftar_ikan_details = listIkan;
    ikanDipilih: IkanDetailItem;

    onSelect(ikanPilih: IkanDetailItem) : void {
        this.ikanDipilih = ikanPilih;
    }
}