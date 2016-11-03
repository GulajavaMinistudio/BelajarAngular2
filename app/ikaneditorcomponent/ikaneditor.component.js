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
var Ikan = (function () {
    function Ikan() {
    }
    return Ikan;
}());
exports.Ikan = Ikan;
var IkanEditorComponent = (function () {
    function IkanEditorComponent() {
        this.nama_ikan = "Ikan Mas Koki";
        this.ikan = {
            id: 23,
            detail: "Ikan mas koki yang berwarna emas"
        };
    }
    IkanEditorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'ikaneditorinput.component.html',
            styleUrls: ['ikaneditor.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], IkanEditorComponent);
    return IkanEditorComponent;
}());
exports.IkanEditorComponent = IkanEditorComponent;
//# sourceMappingURL=ikaneditor.component.js.map