"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var IkanItem = (function () {
    function IkanItem() {
    }
    return IkanItem;
}());
exports.IkanItem = IkanItem;
var listIkan = [
    { id_ikan: 10, nama_ikan: "Ikan Koi" },
    { id_ikan: 11, nama_ikan: "Ikan Mas" },
    { id_ikan: 12, nama_ikan: "Ikan Mujair" },
    { id_ikan: 13, nama_ikan: "Ikan Mas Koi" },
    { id_ikan: 14, nama_ikan: "Ikan Hiu" }
];
var DaftarIkanComponent = (function () {
    function DaftarIkanComponent() {
        this.judul_daftar_ikan = "Daftar Ikan";
        this.daftar_ikans = listIkan;
    }
    DaftarIkanComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'daftarikan.component.html',
            styleUrls: ['daftarikan.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DaftarIkanComponent);
    return DaftarIkanComponent;
}());
exports.DaftarIkanComponent = DaftarIkanComponent;
//# sourceMappingURL=daftarikan.component.js.map