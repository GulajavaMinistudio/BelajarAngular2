import {Component} from "@angular/core";
/**
 * Created by kucingmint on 11/3/16.
 */


export class IkanItem {
    id_ikan: number;
    nama_ikan: string;
}

const listIkan: IkanItem[] = [
    {id_ikan: 10, nama_ikan: "Ikan Koi"},
    {id_ikan: 11, nama_ikan: "Ikan Mas"},
    {id_ikan: 12, nama_ikan: "Ikan Mujair"},
    {id_ikan: 13, nama_ikan: "Ikan Mas Koi"},
    {id_ikan: 14, nama_ikan: "Ikan Hiu"}
];

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'daftarikan.component.html',
    styleUrls: ['daftarikan.component.css']
})

export class DaftarIkanComponent {
    judul_daftar_ikan = "Daftar Ikan";
    daftar_ikans = listIkan;

    ikanDipilih: IkanItem;

    onSelect(ikanPilih: IkanItem) : void {
        this.ikanDipilih = ikanPilih;
    }
}