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
var ikan_detail_1 = require("./ikan-detail");
var IkanDetailComponent = (function () {
    function IkanDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', ikan_detail_1.IkanDetailItem)
    ], IkanDetailComponent.prototype, "ikan_detail_items", void 0);
    IkanDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "detail-ikan-page",
            templateUrl: "ikan-detail.component.html",
            styleUrls: ["daftarikan.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], IkanDetailComponent);
    return IkanDetailComponent;
}());
exports.IkanDetailComponent = IkanDetailComponent;
//# sourceMappingURL=ikan-detail.component.js.map