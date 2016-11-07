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
var platform_browser_1 = require("@angular/platform-browser");
var heroeditor_component_1 = require("./heroeditorcomponent/heroeditor.component");
var ikaneditor_component_1 = require("./ikaneditorcomponent/ikaneditor.component");
var ikaneditorclass_component_1 = require("./ikaneditorcomponent/ikaneditorclass.component");
var forms_1 = require("@angular/forms");
var daftarikan_component_1 = require("./listdetailikancomponent/daftarikan.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [heroeditor_component_1.HeroEditorComponent, ikaneditor_component_1.IkanEditorComponent, ikaneditorclass_component_1.IkanEditorComponentClass,
                daftarikan_component_1.DaftarIkanComponent],
            bootstrap: [daftarikan_component_1.DaftarIkanComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map