webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div>\r\n    <flash-messages></flash-messages>\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_youtube_player__ = __webpack_require__("./node_modules/ng2-youtube-player/modules/ng2-youtube-player.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_fontawesome_angular2_fontawesome__ = __webpack_require__("./node_modules/angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_fontawesome_angular2_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_fontawesome_angular2_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_drag_drop__ = __webpack_require__("./node_modules/ng2-drag-drop/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_drag_drop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_drag_drop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_player_player_component__ = __webpack_require__("./src/app/components/player/player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_playlist_playlist_component__ = __webpack_require__("./src/app/components/playlist/playlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__guards_unauth_guard__ = __webpack_require__("./src/app/guards/unauth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_video_service__ = __webpack_require__("./src/app/services/video.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_unauth_guard__["a" /* UnauthGuard */]] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_unauth_guard__["a" /* UnauthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_unauth_guard__["a" /* UnauthGuard */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'player/:id_playlist/:track', component: __WEBPACK_IMPORTED_MODULE_15__components_player_player_component__["a" /* PlayerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'playlist/:id_playlist', component: __WEBPACK_IMPORTED_MODULE_16__components_playlist_playlist_component__["a" /* PlaylistComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_player_player_component__["a" /* PlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_playlist_playlist_component__["a" /* PlaylistComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_5_ng2_youtube_player__["a" /* YoutubePlayerModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_fontawesome_angular2_fontawesome__["Angular2FontawesomeModule"],
                __WEBPACK_IMPORTED_MODULE_7_ng2_drag_drop__["Ng2DragDropModule"].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__["FlashMessagesService"],
                __WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_21__guards_unauth_guard__["a" /* UnauthGuard */],
                __WEBPACK_IMPORTED_MODULE_22__services_video_service__["a" /* VideoService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  dashboard works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".cont{\r\n    margin: 40px;\r\n    background-image: url('music2.902366133c6d808e2f0b.jpg')\r\n}\r\n.scrollbar {\r\n    height: 450px;\r\n    width: 105%;\r\n    background: #fff;\r\n    overflow-y: scroll;\r\n}\r\n.force-overflow {\r\n    min-height: 450px;\r\n}\r\n.scrollbar-primary::-webkit-scrollbar {\r\n  width: 12px;\r\n  background-color: #F5F5F5; }\r\n.scrollbar-primary::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #4285F4; }\r\n.scrollbar-danger::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #F5F5F5;\r\n  border-radius: 10px; }\r\n.scrollbar-danger::-webkit-scrollbar {\r\n  width: 12px;\r\n  background-color: #F5F5F5; }\r\n.scrollbar-danger::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #ff3547; }\r\n.scrollbar-warning::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #F5F5F5;\r\n  border-radius: 10px; }\r\n.scrollbar-warning::-webkit-scrollbar {\r\n  width: 12px;\r\n  background-color: #F5F5F5; }\r\n.scrollbar-warning::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #FF8800; }\r\n.scrollbar-success::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #F5F5F5;\r\n  border-radius: 10px; }\r\n.scrollbar-success::-webkit-scrollbar {\r\n  width: 12px;\r\n  background-color: #F5F5F5; }\r\n.scrollbar-success::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #00C851; }\r\n.scrollbar-info::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #F5F5F5;\r\n  border-radius: 10px; }\r\n.scrollbar-info::-webkit-scrollbar {\r\n  width: 12px;\r\n  background-color: #F5F5F5; }\r\n.scrollbar-info::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #33b5e5; }\r\n.scrollbar-default::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #F5F5F5;\r\n  border-radius: 10px; }\r\n.scrollbar-default::-webkit-scrollbar {\r\n  width: 12px;\r\n  background-color: #F5F5F5; }\r\n.scrollbar-default::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #2BBBAD; }\r\n.scrollbar-secondary::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #F5F5F5;\r\n  border-radius: 10px; }\r\n.scrollbar-secondary::-webkit-scrollbar {\r\n  width: 12px;\r\n  background-color: #F5F5F5; }\r\n.scrollbar-secondary::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #aa66cc; \r\n}\r\n#loading{\r\n  background-color: #fff ;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n  margin-top: 0px;\r\n  top: 0px;\r\n}\r\n#loading-center{\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  }\r\n#loading-center-absolute {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  height: 50px;\r\n  width: 150px;\r\n  margin-top: -25px;\r\n  margin-left: -75px;\r\n\r\n}\r\n.object{\r\n  width: 8px;\r\n  height: 50px;\r\n  margin-right:5px;\r\n  background-color : darkblue;\r\n  -webkit-animation: animate 1s infinite;\r\n  animation: animate 1s infinite;\r\n  float: left;\r\n  }\r\n.object:last-child {\r\n  margin-right: 0px;\r\n  }\r\n.object:nth-child(10){\r\n  -webkit-animation-delay: 0.9s;\r\n    animation-delay: 0.9s;\t\r\n  }\r\n.object:nth-child(9){\r\n  -webkit-animation-delay: 0.8s;\r\n    animation-delay: 0.8s;\t\r\n  }\r\n.object:nth-child(8){\r\n  -webkit-animation-delay: 0.7s;\r\n    animation-delay: 0.7s;\t\r\n  }\r\n.object:nth-child(7){\r\n  -webkit-animation-delay: 0.6s;\r\n    animation-delay: 0.6s;\t\r\n  }\r\n.object:nth-child(6){\r\n  -webkit-animation-delay: 0.5s;\r\n    animation-delay: 0.5s;\t\r\n  }\r\n.object:nth-child(5){\r\n  -webkit-animation-delay: 0.4s;\r\n    animation-delay: 0.4s;\r\n  }\r\n.object:nth-child(4){\r\n  -webkit-animation-delay: 0.3s;\r\n    animation-delay: 0.3s;\t\t\r\n  }\r\n.object:nth-child(3){\r\n  -webkit-animation-delay: 0.2s;\r\n    animation-delay: 0.2s;\t\r\n  }\r\n.object:nth-child(2){\r\n  -webkit-animation-delay: 0.1s;\r\n    animation-delay: 0.1s;\r\n  }\r\n@-webkit-keyframes animate {\r\n\r\n  50% { \r\n  -webkit-transform: scaleY(0);\r\n  transform: scaleY(0);\r\n  \r\n    }\r\n    \r\n    \r\n\r\n}\r\n@keyframes animate {\r\n  50% { \r\n  -webkit-transform: scaleY(0);\r\n  transform: scaleY(0);\r\n    }\r\n\r\n  \r\n}\r\n.mybtn {\r\n  background-color: darkblue !important;\r\n  color: #fff;\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<div class=\"cont\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-2\">\r\n      <div class=\"card bg-light mb-2\" style=\"max-width: 20rem;\">\r\n        <div class=\"card-header\">Data</div>\r\n        <div class=\"card-body\">\r\n          <ul class=\"list-group\">\r\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n              Playlist\r\n              <span class=\"badge badge-primary badge-pill\">{{nbr_playlist}}</span>\r\n            </li>\r\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n              Track\r\n              <span class=\"badge badge-primary badge-pill\">{{nbr_morceau}}</span>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <div class=\"col-lg-8\">\r\n\r\n      <form (ngSubmit)=\"onAddSubmit()\" class=\"form-inline my-4 my-lg-0\">\r\n        <input class=\"form-control mr-sm-3\" type=\"text\" [(ngModel)]=\"name\" name=\"name\" width=\"200px\"\r\n          placeholder=\"Ex : my new playlist\">\r\n        <button type=\"submit\" class=\"btn btn-primary mybtn\">Add</button>\r\n      </form>\r\n      <hr>\r\n\r\n      <div class=\"scrollbar scrollbar-danger\" style=\"opacity : 0.9\">\r\n        <div *ngIf=\"show\" id=\"loading\">\r\n          <div id=\"loading-center\">\r\n            <div id=\"loading-center-absolute\">\r\n              <div class=\"object\"></div>\r\n              <div class=\"object\"></div>\r\n              <div class=\"object\"></div>\r\n              <div class=\"object\"></div>\r\n              <div class=\"object\"></div>\r\n              <div class=\"object\"></div>\r\n              <div class=\"object\"></div>\r\n              <div class=\"object\"></div>\r\n              <div class=\"object\"></div>\r\n              <div class=\"object\"></div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <table *ngIf=\"!show\" class=\"table table-hover\">\r\n          <thead class=\"thead-reverse\">\r\n\r\n            <tr>\r\n              <th>#</th>\r\n              <th>Play</th>\r\n              <th>Name</th>\r\n              <th>Edit</th>\r\n              <th>Delete</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let playlist of playlists; let i = index\">\r\n              <td>{{i + 1}}</td>\r\n              <td><a class=\"btn btn-ink\" (click)=\"onPlay(playlist._id)\"><i class=\"fa fa-play\"></i></a></td>\r\n              <td>{{playlist.name}}</td>\r\n              <td>\r\n                <a class=\"btn btn-ink\" (click)=\"onNavigate(playlist._id)\"><i class=\"fa fa-edit\"\r\n                    style=\"font-size:20px;\"></i></a>\r\n              </td>\r\n              <td>\r\n                <a class=\"btn btn-ink\" (click)=\"onDeleteSubmit(playlist._id)\"><i class=\"fa fa-trash-o\"\r\n                    style=\"font-size:20px;color:red\"></i></a>\r\n              </td>\r\n            </tr>\r\n\r\n\r\n          </tbody>\r\n        </table>\r\n\r\n\r\n      </div>\r\n      <div class=\"col-lg-2\"></div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_video_service__ = __webpack_require__("./src/app/services/video.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(videoService, flashMessagesService, router) {
        this.videoService = videoService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.show = false;
        this.nbr_morceau = 0;
        this.nbr_playlist = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.show = true;
        this.videoService.getPlayList().subscribe(function (profile) {
            _this.playlists = profile.playlist;
            _this.show = false;
            console.log(_this.playlists);
            _this.nbr_playlist = _this.playlists.length;
        }, function (err) {
            _this.show = false;
            console.log(err);
            return false;
        });
        this.videoService.getCountByUser().subscribe(function (data) {
            if (data.success) {
                _this.nbr_morceau = data.count;
            }
            else {
                console.log(data.err);
                _this.nbr_morceau = 0;
            }
        });
    };
    HomeComponent.prototype.onPlay = function (id_playlist) {
        this.router.navigate(['/player/' + id_playlist + '/' + 1]);
    };
    HomeComponent.prototype.loadData = function () {
        var _this = this;
        this.show = true;
        this.videoService.getPlayList().subscribe(function (profile) {
            _this.playlists = profile.playlist;
            _this.show = false;
            _this.nbr_playlist = _this.playlists.length;
        });
        this.videoService.getCountByUser().subscribe(function (data) {
            if (data.success) {
                _this.nbr_morceau = data.count;
            }
            else {
                _this.nbr_morceau = 0;
            }
        });
    };
    HomeComponent.prototype.onNavigate = function (id_playlist) {
        console.log(id_playlist);
        this.router.navigate(['/playlist/' + id_playlist]);
    };
    HomeComponent.prototype.onAddSubmit = function () {
        var _this = this;
        this.show = true;
        var playlist = {
            name: this.name
        };
        this.videoService.addPlayList(playlist).subscribe(function (data) {
            if (data.success) {
                _this.name = undefined;
                _this.loadData();
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-primary', timeout: 3000 });
            }
        });
    };
    HomeComponent.prototype.onDeleteSubmit = function (id_playlist) {
        var _this = this;
        var id = {
            id_playlist: id_playlist
        };
        console.log(id);
        this.videoService.deletePlayList(id).subscribe(function (data) {
            if (data.success) {
                _this.loadData();
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-primary', timeout: 3000 });
            }
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_video_service__["a" /* VideoService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".cont{\r\n    margin: 40px;\r\n    \r\n}\r\nimg {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n.mybtn {\r\n    width: 100%;\r\n    background-color: darkblue !important;\r\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cont\">\r\n\t<div class=\"row\">\r\n    \r\n\t\t<div class=\"col-lg-4\">\r\n\t\t  <img src=\"assets/login1.png\">\r\n    </div>\r\n    \r\n   \r\n    <div class=\"col-lg-6\">\r\n        <form (submit)=\"onLoginSubmit()\">\r\n            <fieldset>\r\n              <legend>Log in</legend>\r\n              <hr>\r\n              <div class=\"control-group\">\r\n                \r\n                <div class=\"form-group\">\r\n                  <label>Email</label>\r\n                  <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\"  aria-describedby=\"emailHelp\" placeholder=\"ex : example@test.com\">\r\n                  \r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"exampleInputPassword1\">Password</label>\r\n                  <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"password\">\r\n                </div>         \r\n                <button type=\"submit\" class=\"btn btn-primary mybtn\">Log in</button>\r\n              </div>\r\n            </fieldset>\r\n          </form>\r\n    </div>\r\n\t\t\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(validateService, flashMessagesService, authService, router) {
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        if (!this.validateService.validateLogin(user)) {
            this.flashMessagesService.show('Veuillez remplir tout les champs', { cssClass: 'alert-primary', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessagesService.show('Veuillez utiliser un mail valide', { cssClass: 'alert-primary', timeout: 3000 });
            return false;
        }
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessagesService.show("Vous êtes connecté", {
                    cssClass: 'alert-success',
                    timout: 5000
                });
                _this.router.navigate(['/home']);
            }
            else {
                _this.flashMessagesService.show(data.msg, {
                    cssClass: 'alert-primary',
                    timout: 5000
                });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".mynav {\r\n    background-color: #ffffff ;\r\n    background: url('musicplayer.9e500cbcd5a820916457.jpg');\r\n    height: 100px;\r\n    \r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary  mynav navbar-fixed-top\">\r\n    <a href=\"/home\" class=\"navbar-brand pull-left\"><img src=\"assets/logo_F.png\" height=\"150px\" width=\"auto\" style=\"padding-top: 5px; margin-top: 25px; margin-left: 25px;\"></a> \r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li  *ngIf=\"authService.loggedIn()\" class=\"nav-item\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/home']\">Home</a>  \r\n        </li>\r\n       \r\n        \r\n        \r\n      </ul>\r\n     \r\n\r\n     <ul class=\"nav navbar-nav navbar-right\">\r\n        <li *ngIf=\"authService.loggedOut()\" class=\"nav-item\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n            <a class=\"nav-link\"  [routerLink]=\"['/login']\">Log in</a>\r\n          </li>\r\n        <li *ngIf=\"authService.loggedOut()\" class=\"nav-item\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n          <a class=\"nav-link\"  [routerLink]=\"['/register']\">Sign in</a>\r\n        </li>\r\n        <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" >\r\n            <a class=\"nav-link\" (click)=\"onLogoutClick()\"href=\"#\" >Log out</a>\r\n        </li>\r\n       \r\n      </ul>\r\n    </div>\r\n  </nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(flashMessagesService, authService, router) {
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessagesService.show("Vous êtes déconnecté", {
            cssClass: 'alert-success',
            timout: 3000
        });
        this.router.navigate(['/']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/player/player.component.css":
/***/ (function(module, exports) {

module.exports = ".cont{\r\n    margin: 40px;\r\n}\r\n.customwrapper{\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  max-width: 1765px;\r\n  padding-right: 10px;\r\n  padding-left: 10px;\r\n}\r\n.scrollbar {\r\n    height: 400px;\r\n    width: 99%;\r\n    background: #fff;\r\n    overflow-y: scroll;\r\n}\r\n.force-overflow {\r\n    min-height: 450px;\r\n}\r\n.list-group img{\r\n  width: 100%; \r\n  height: auto;\r\n}\r\n.scrollbar-primary::-webkit-scrollbar {\r\n  width: 12px;\r\n  background-color: #F5F5F5; }\r\n.scrollbar-primary::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #4285F4; }\r\n.scrollbar-danger::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #F5F5F5;\r\n  border-radius: 10px; }\r\n.scrollbar-danger::-webkit-scrollbar {\r\n  width: 12px;\r\n  background-color: #F5F5F5; }\r\n.scrollbar-danger::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #561b14; }\r\n.scrollbar-warning::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #F5F5F5;\r\n  border-radius: 10px; }\r\n.scrollbar-warning::-webkit-scrollbar {\r\n  width: 12px;\r\n  background-color: #F5F5F5; }\r\n.scrollbar-warning::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #FF8800; }\r\n.scrollbar-success::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #F5F5F5;\r\n  border-radius: 10px; }\r\n.scrollbar-success::-webkit-scrollbar {\r\n  width: 12px;\r\n  background-color: #F5F5F5; }\r\n.scrollbar-success::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #00C851; }\r\n.scrollbar-info::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #F5F5F5;\r\n  border-radius: 10px; }\r\n.scrollbar-info::-webkit-scrollbar {\r\n  width: 12px;\r\n  background-color: #F5F5F5; }\r\n.scrollbar-info::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #33b5e5; }\r\n.scrollbar-default::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #F5F5F5;\r\n  border-radius: 10px; }\r\n.scrollbar-default::-webkit-scrollbar {\r\n  width: 12px;\r\n  background-color: #F5F5F5; }\r\n.scrollbar-default::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #2BBBAD; }\r\n.scrollbar-secondary::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #F5F5F5;\r\n  border-radius: 10px; }\r\n.scrollbar-secondary::-webkit-scrollbar {\r\n  width: 12px;\r\n  background-color: #F5F5F5; }\r\n.scrollbar-secondary::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #aa66cc; \r\n}\r\n#project-wrapper #project-container {\r\n  background: url('musicplayer.9e500cbcd5a820916457.jpg');\r\n  background-size: cover;\r\n  background-position: top center;\r\n  color: white;\r\n  /* height: auto; */\r\n  height: 100px;\r\n  position: relative;\r\n  border-radius: 5px;\r\n  overflow: hidden;\r\n  -webkit-box-shadow: 0px 3px 15px -1px rgba(0, 0, 0, 0.5);\r\n  box-shadow: 0px 3px 15px -1px rgba(0, 0, 0, 0.5);\r\n}\r\n#project-wrapper #project-container #overlay {\r\n  position: absolute;\r\n  height: calc(100% + 1px);\r\n  width: calc(100% + 1px);\r\n  z-index: 2;\r\n  opacity: .85;\r\n}\r\n#project-wrapper #project-container #content {\r\n  text-align: center;\r\n  position: relative;\r\n  z-index: 3;\r\n}\r\n#project-wrapper #project-container #content h2 {\r\n  font-size: 1.3em;\r\n  margin: 35px 0 0 0;\r\n  font-weight: 600;\r\n}\r\n#project-wrapper #project-container #content .h2{\r\n  font-size: 2.3em;\r\n    \r\n    font-weight: 600;\r\n}\r\n#project-wrapper #project-container #content h3 {\r\n  margin: 7px 0 15px 0;\r\n  font-size: 0.9em;\r\n  opacity: .4;\r\n}\r\n#project-wrapper #project-container #content input {\r\n  width: 100%;\r\n  height: 2px;\r\n  margin: 0 0 15px 0;\r\n  /* FF3.6-15 */\r\n  /* Chrome10-25,Safari5.1-6 */\r\n  background: -webkit-gradient(linear, left top, right top, from(#3498db), color-stop(72%, #9b59b6));\r\n  background: linear-gradient(to right, #3498db 0%, #9b59b6 72%);\r\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n}\r\n#project-wrapper #project-container #content input::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  height: 8px;\r\n  width: 8px;\r\n  border-radius: 10px;\r\n  background: #ffffff;\r\n  cursor: pointer;\r\n}\r\n#project-wrapper #project-container #content #controls {\r\n  margin-top:25px;\r\n  height: 50px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n#project-wrapper #project-container #content #controls .column {\r\n  float: left;\r\n}\r\n#project-wrapper #project-container #content #controls .column:nth-child(even) {\r\n  font-size: 1.3em;\r\n}\r\n#project-wrapper #project-container #content #controls .column:nth-child(n+2):nth-child(-n+4) {\r\n  color: white !important;\r\n}\r\n#project-wrapper #project-container #content #controls .column:nth-child(3) {\r\n  font-size: 2em;\r\n}\r\n#project-wrapper #project-container #content #controls .column.active {\r\n  color: #9b59b6;\r\n}\r\n#project-wrapper #project-container #content #controls .column i {\r\n  margin: 0 15px;\r\n  cursor: pointer;\r\n}\r\n#dailyui {\r\n  position: fixed;\r\n  font-size: 12em;\r\n  font-weight: 700;\r\n  margin: 0 0 -28px 0;\r\n  padding: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  color: rgba(0, 0, 0, 0.3);\r\n  z-index: 1;\r\n  text-align: right;\r\n  font-family: 'proxima-nova', 'Lato', sans-serif;\r\n}\r\n.mybtn {\r\n  \r\n  background-color: darkblue !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/player/player.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cont\">\r\n  \r\n  <div class=\"row\">\r\n    \r\n    <div class=\"col-sm-12 customwrapper\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-8\" droppable (onDrop)=\"nextManuel($event)\">\r\n            <youtube-player *ngIf=\"id!=undefined\"\r\n            height=\"500px\"\r\n            width=\"100%\"\r\n            [videoId]=\"id\"\r\n            (ready)=\"savePlayer($event)\"\r\n            (change)=\"onStateChange($event)\"\r\n            ></youtube-player>\r\n          \r\n          <div id=\"project-wrapper\">\r\n            <div id=\"project-container\">\r\n              <div id=\"overlay\"></div>\r\n              <div id=\"content\">\r\n                <h2>{{titre}}</h2>\r\n                <h3>{{description}}</h3>\r\n                \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 \" style=\"margin-top: -10px;\">\r\n              <div class=\"col-lg-12 btn btn-link\" (click)=\"onClickPlayList()\">\r\n                <div id=\"project-wrapper\" >\r\n                    <div id=\"project-container\">\r\n                      <div id=\"overlay\"></div>\r\n                      <div id=\"content\">\r\n                        <h2 class=\"h2\"><span>{{informationPlaylist.name}}</span></h2>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                \r\n            </div>\r\n            <div class=\"col-lg-12\">\r\n                <div class=\"scrollbar scrollbar-danger\">  \r\n                    <div class=\"list-group\">\r\n                      <div (click)=\"nextManualClick(search.track)\" draggable [dragData]=\"search.track\" *ngFor=\"let search of playlist; let i = index\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-lg-3\">\r\n                              <img src={{search.image}}>\r\n                          </div>\r\n                          <div class=\"col-lg-9\">\r\n                              <div class=\"d-flex w-100 justify-content-between\">\r\n                                  <h6 class=\"mb-1\">{{search.titre}}</h6>\r\n                              </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>    \r\n                    </div>\r\n                  </div>\r\n            </div>\r\n            <div class=\"col-lg-12\">\r\n                <div id=\"project-wrapper\">\r\n                    <div id=\"project-container\">\r\n                      <div id=\"overlay\"></div>\r\n                      <div id=\"content\">\r\n                        <div id=\"controls\">\r\n                            <div class=\"column\" (click)=\"ngOnInit()\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i></div>\r\n                            <div class=\"column\" (click)=\"previouse()\"><i class=\"fa fa-step-backward\" aria-hidden=\"true\"></i></div>\r\n                            <div class=\"column\" *ngIf=\"!isPlay\" (click)=\"changeEvent()\"><i class=\"fa fa-play play-btn fa-fw\" aria-hidden=\"true\"></i></div>\r\n                            <div class=\"column\" *ngIf=\"isPlay\" (click)=\"changeEvent()\"><i class=\"fa fa-pause pause-btn fa-fw\" aria-hidden=\"true\"></i></div>\r\n                            <div class=\"column\" (click)=\"next()\"><i class=\"fa fa-step-forward\" aria-hidden=\"true\"></i></div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n            </div>\r\n            \r\n          </div>  \r\n        </div>\r\n      </div>\r\n    </div> \r\n    \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/player/player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_video_service__ = __webpack_require__("./src/app/services/video.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(videoService, route, router) {
        this.videoService = videoService;
        this.route = route;
        this.router = router;
    }
    PlayerComponent.prototype.savePlayer = function (player) {
        this.player = player;
        this.player.playVideo();
        this.isPlay = true;
    };
    PlayerComponent.prototype.next = function () {
        var one = 1;
        var index = +this.track + +one;
        console.log("index " + index);
        if (index <= this.playlist.length) {
            this.router.navigate(['/player/' + this.id_playlist + '/' + index]);
            this.id = undefined;
        }
    };
    PlayerComponent.prototype.nextManuel = function (event) {
        this.router.navigate(['/player/' + this.id_playlist + '/' + event.dragData]);
        this.id = undefined;
    };
    PlayerComponent.prototype.nextManualClick = function (track) {
        this.router.navigate(['/player/' + this.id_playlist + '/' + track]);
        this.id = undefined;
    };
    PlayerComponent.prototype.changeEvent = function () {
        if (this.isPlay) {
            this.player.pauseVideo();
            this.isPlay = false;
        }
        else {
            this.player.playVideo();
            this.isPlay = true;
        }
    };
    PlayerComponent.prototype.previouse = function () {
        var one = 1;
        var index = +this.track - +one;
        console.log("index " + index);
        if (index > 0) {
            this.router.navigate(['/player/' + this.id_playlist + '/' + index]);
            this.id = undefined;
        }
    };
    PlayerComponent.prototype.onStateChange = function (event) {
        console.log('player state', event.data);
        if (event.data == 0) {
            this.next();
        }
    };
    PlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var index = 0;
        this.id = undefined;
        this.route.params.subscribe(function (params) {
            console.log(params);
            _this.id_playlist = params['id_playlist'];
            _this.track = params['track'];
            index = +_this.track - 1;
            var id_playlist = { "id_playlist": _this.id_playlist };
            _this.videoService.getVideoOfPlayList(id_playlist).subscribe(function (data) {
                if (data != undefined) {
                    if (data.success) {
                        _this.playlist = data.playlist;
                        var video = _this.playlist[index];
                        _this.id = video.id_youtube;
                        _this.titre = video.titre;
                        _this.description = video.genre;
                        _this.img = video.image;
                    }
                    else {
                        console.log(data.msg);
                    }
                }
            });
            _this.initInformation();
        });
    };
    PlayerComponent.prototype.initInformation = function () {
        var _this = this;
        var argument = {
            id_playlist: this.id_playlist
        };
        this.videoService.getPlayListById(argument).subscribe(function (data) {
            if (data.success) {
                _this.informationPlaylist = data.playlist;
            }
        });
    };
    PlayerComponent.prototype.onClickPlayList = function () {
        this.router.navigate(['/playlist/' + this.id_playlist]);
    };
    PlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-player',
            template: __webpack_require__("./src/app/components/player/player.component.html"),
            styles: [__webpack_require__("./src/app/components/player/player.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_video_service__["a" /* VideoService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/components/playlist/playlist.component.css":
/***/ (function(module, exports) {

module.exports = ".cont{\r\n    margin: 40px;\r\n}\r\n.cont1{\r\n  margin-top: 35px;\r\n  height: 50px;\r\n  width: auto;\r\n}\r\n.scrollbar {\r\n    height: 450px;\r\n    width: 105%;\r\n    background: #fff;\r\n    overflow-y: scroll;\r\n}\r\n.force-overflow {\r\n    min-height: 450px;\r\n}\r\n.scrollbar-primary::-webkit-scrollbar {\r\n  width: 12px;\r\n  background-color: #F5F5F5; }\r\n.scrollbar-primary::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #4285F4; }\r\n.scrollbar-danger::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #F5F5F5;\r\n  border-radius: 10px; }\r\n.scrollbar-danger::-webkit-scrollbar {\r\n  width: 12px;\r\n  background-color: #F5F5F5; }\r\n.scrollbar-danger::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #561b14; }\r\n.scrollbar-warning::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #F5F5F5;\r\n  border-radius: 10px; }\r\n.scrollbar-warning::-webkit-scrollbar {\r\n  width: 12px;\r\n  background-color: #F5F5F5; }\r\n.scrollbar-warning::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #FF8800; }\r\n.scrollbar-success::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #F5F5F5;\r\n  border-radius: 10px; }\r\n.scrollbar-success::-webkit-scrollbar {\r\n  width: 12px;\r\n  background-color: #F5F5F5; }\r\n.scrollbar-success::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #00C851; }\r\n.scrollbar-info::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #F5F5F5;\r\n  border-radius: 10px; }\r\n.scrollbar-info::-webkit-scrollbar {\r\n  width: 12px;\r\n  background-color: #F5F5F5; }\r\n.scrollbar-info::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #33b5e5; }\r\n.scrollbar-default::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #F5F5F5;\r\n  border-radius: 10px; }\r\n.scrollbar-default::-webkit-scrollbar {\r\n  width: 12px;\r\n  background-color: #F5F5F5; }\r\n.scrollbar-default::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #2BBBAD; }\r\n.scrollbar-secondary::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #F5F5F5;\r\n  border-radius: 10px; }\r\n.scrollbar-secondary::-webkit-scrollbar {\r\n  width: 12px;\r\n  background-color: #F5F5F5; }\r\n.scrollbar-secondary::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #aa66cc; \r\n}\r\nimg {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n#loading{\r\n  background-color: #fff ;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n  margin-top: 0px;\r\n  top: 0px;\r\n}\r\n#loading-center{\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  }\r\n#loading-center-absolute {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  height: 50px;\r\n  width: 150px;\r\n  margin-top: -25px;\r\n  margin-left: -75px;\r\n\r\n}\r\n.object{\r\n  width: 8px;\r\n  height: 50px;\r\n  margin-right:5px;\r\n  background-color : darkblue;\r\n  -webkit-animation: animate 1s infinite;\r\n  animation: animate 1s infinite;\r\n  float: left;\r\n  }\r\n.object:last-child {\r\n  margin-right: 0px;\r\n  }\r\n.object:nth-child(10){\r\n  -webkit-animation-delay: 0.9s;\r\n    animation-delay: 0.9s;\t\r\n  }\r\n.object:nth-child(9){\r\n  -webkit-animation-delay: 0.8s;\r\n    animation-delay: 0.8s;\t\r\n  }\r\n.object:nth-child(8){\r\n  -webkit-animation-delay: 0.7s;\r\n    animation-delay: 0.7s;\t\r\n  }\r\n.object:nth-child(7){\r\n  -webkit-animation-delay: 0.6s;\r\n    animation-delay: 0.6s;\t\r\n  }\r\n.object:nth-child(6){\r\n  -webkit-animation-delay: 0.5s;\r\n    animation-delay: 0.5s;\t\r\n  }\r\n.object:nth-child(5){\r\n  -webkit-animation-delay: 0.4s;\r\n    animation-delay: 0.4s;\r\n  }\r\n.object:nth-child(4){\r\n  -webkit-animation-delay: 0.3s;\r\n    animation-delay: 0.3s;\t\t\r\n  }\r\n.object:nth-child(3){\r\n  -webkit-animation-delay: 0.2s;\r\n    animation-delay: 0.2s;\t\r\n  }\r\n.object:nth-child(2){\r\n  -webkit-animation-delay: 0.1s;\r\n    animation-delay: 0.1s;\r\n  }\r\n@-webkit-keyframes animate {\r\n\r\n  50% { \r\n  -webkit-transform: scaleY(0);\r\n  transform: scaleY(0);\r\n  \r\n    }\r\n    \r\n    \r\n\r\n}\r\n@keyframes animate {\r\n  50% { \r\n  -webkit-transform: scaleY(0);\r\n  transform: scaleY(0);\r\n    }\r\n\r\n  \r\n}\r\n.mybtn {\r\n  \r\n  background-color: darkblue !important;\r\n}"

/***/ }),

/***/ "./src/app/components/playlist/playlist.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<div class=\"cont\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-1\">\r\n        </div>\r\n        <div class=\"col-lg-5\">\r\n            <form (ngSubmit)=\"onSearchSubmit()\" class=\"my-5 my-lg-0\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-10\">\r\n                        <input class=\"form-control mr-sm-4\" type=\"text\" [(ngModel)]=\"key\" name=\"key\"\r\n                            placeholder=\"Youtube search\">\r\n                    </div>\r\n                    <div class=\"col-sm-2\">\r\n                        <button type=\"submit\" class=\"btn btn-primary mybtn\">Search</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n            <hr>\r\n\r\n            <div class=\"scrollbar scrollbar-danger\">\r\n\r\n                <div *ngIf=\"show\" id=\"loading\">\r\n                    <div id=\"loading-center\">\r\n                        <div id=\"loading-center-absolute\">\r\n                            <div class=\"object\"></div>\r\n                            <div class=\"object\"></div>\r\n                            <div class=\"object\"></div>\r\n                            <div class=\"object\"></div>\r\n                            <div class=\"object\"></div>\r\n                            <div class=\"object\"></div>\r\n                            <div class=\"object\"></div>\r\n                            <div class=\"object\"></div>\r\n                            <div class=\"object\"></div>\r\n                            <div class=\"object\"></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"list-group\">\r\n                    <div draggable [dragData]=\"i\" *ngFor=\"let search of search; let i = index\"\r\n                        class=\"list-group-item list-group-item-action flex-column align-items-start\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-2\">\r\n                                <img src={{search.thumbnails.default.url}}>\r\n                            </div>\r\n                            <div class=\"col-lg-10\">\r\n                                <div class=\"d-flex w-100 justify-content-between\">\r\n                                    <h6 class=\"mb-1\">{{search.title}}</h6>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-1\"></div>\r\n        </div>\r\n        <div class=\"col-lg-5\">\r\n\r\n            <form (ngSubmit)=\"onAddSubmit()\" class=\"my-5 my-lg-0\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-10\">\r\n                        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"url\" name=\"url\"\r\n                            placeholder=\"add Youtube URL\">\r\n                    </div>\r\n                    <div class=\"col-sm-2\">\r\n                        <button type=\"submit\" class=\"btn btn-primary mybtn\">Add</button>\r\n                    </div>\r\n                </div>\r\n\r\n            </form>\r\n            <hr>\r\n\r\n            <div droppable (onDrop)=\"onAddYoutubeSubmit($event)\" class=\"scrollbar scrollbar-danger\">\r\n                <div *ngIf=\"showData\" id=\"loading\">\r\n                    <div id=\"loading-center\">\r\n                        <div id=\"loading-center-absolute\">\r\n                            <div class=\"object\"></div>\r\n                            <div class=\"object\"></div>\r\n                            <div class=\"object\"></div>\r\n                            <div class=\"object\"></div>\r\n                            <div class=\"object\"></div>\r\n                            <div class=\"object\"></div>\r\n                            <div class=\"object\"></div>\r\n                            <div class=\"object\"></div>\r\n                            <div class=\"object\"></div>\r\n                            <div class=\"object\"></div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <table *ngIf=\"!showData\" class=\"table table-hover\">\r\n                    <thead class=\"thead-reverse\">\r\n\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Play</th>\r\n                            <th>Title</th>\r\n                            <th>Track</th>\r\n                            <th></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n\r\n                        <tr *ngFor=\"let video of videos; let i = index\">\r\n                            <td>{{i + 1}}</td>\r\n                            <td><a class=\"btn btn-ink\" (click)=\"onPlay(video.track)\"><i class=\"fa fa-play\"></i></a></td>\r\n                            <td>{{video.titre}}</td>\r\n                            <td>{{video.track}}</td>\r\n\r\n                            <td>\r\n                                <a class=\"btn btn-ink\" (click)=\"onDeleteSubmit(i)\"><i class=\"fa fa-trash-o\"\r\n                                        style=\"font-size:20px;color:red\"></i></a>\r\n                            </td>\r\n                        </tr>\r\n\r\n\r\n                    </tbody>\r\n                </table>\r\n\r\n\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=col-lg-12>\r\n            <div *ngIf=\"onSave\" class=\"cont1\">\r\n                <div id=\"loading2\">\r\n                    <div id=\"loading-center\">\r\n                        <div id=\"loading-center-absolute\">\r\n                            <div class=\"object\"></div>\r\n                            <div class=\"object\"></div>\r\n                            <div class=\"object\"></div>\r\n                            <div class=\"object\"></div>\r\n                            <div class=\"object\"></div>\r\n                            <div class=\"object\"></div>\r\n                            <div class=\"object\"></div>\r\n                            <div class=\"object\"></div>\r\n                            <div class=\"object\"></div>\r\n                            <div class=\"object\"></div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/playlist/playlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_video_service__ = __webpack_require__("./src/app/services/video.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlaylistComponent = /** @class */ (function () {
    function PlaylistComponent(videoService, route, router, flashMessagesService) {
        this.videoService = videoService;
        this.route = route;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.show = false;
        this.showData = false;
        this.onSave = false;
    }
    PlaylistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id_playlist = params['id_playlist'];
            console.log(_this.id_playlist);
        });
        this.loadData();
    };
    PlaylistComponent.prototype.onPlay = function (track) {
        this.router.navigate(['/player/' + this.id_playlist + '/' + track]);
    };
    PlaylistComponent.prototype.loadData = function () {
        var _this = this;
        this.showData = true;
        var id_playlist = { "id_playlist": this.id_playlist };
        this.videoService.getVideoOfPlayList(id_playlist).subscribe(function (data) {
            if (data != undefined) {
                if (data.success) {
                    _this.videos = data.playlist;
                    _this.showData = false;
                }
                else {
                    _this.router.navigate(['/home']);
                    _this.showData = false;
                }
            }
        });
    };
    PlaylistComponent.prototype.loadDataBackground = function () {
        var _this = this;
        var id_playlist = { "id_playlist": this.id_playlist };
        this.videoService.getVideoOfPlayList(id_playlist).subscribe(function (data) {
            if (data != undefined) {
                if (data.success) {
                    _this.videos = data.playlist;
                    _this.showData = false;
                }
                else {
                    _this.router.navigate(['/home']);
                    _this.showData = false;
                }
            }
        });
    };
    PlaylistComponent.prototype.onAddSubmit = function () {
        var _this = this;
        this.onSave = true;
        var argument = {
            id_playlist: this.id_playlist,
            url: this.url
        };
        this.videoService.addVideoOfPlayList(argument).subscribe(function (data) {
            _this.showData = true;
            if (data.success) {
                _this.url = undefined;
                _this.loadData();
                _this.onSave = false;
            }
            else {
                _this.showData = false;
                _this.onSave = false;
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-primary', timeout: 3000 });
            }
        });
    };
    PlaylistComponent.prototype.onAddYoutubeSubmit = function (url) {
        var _this = this;
        this.onSave = true;
        url = url.dragData;
        var video = this.search[url];
        var argument = {
            id_playlist: this.id_playlist,
            id_youtube: video.id,
            genre: video.channelTitle,
            titre: video.title,
            duration: video.duration,
            track: this.videos.length + 1,
            image: video.thumbnails.default.url
        };
        this.videos.push(argument);
        this.videoService.addVideoOfPlayListYoutube(argument).subscribe(function (data) {
            if (data.success) {
                _this.url = undefined;
                _this.onSave = false;
                _this.loadDataBackground();
            }
            else {
                _this.flashMessagesService.show("Impossible d'enregistrer " + argument.titre + " dans la base", { cssClass: 'alert-primary', timeout: 3000 });
                _this.videos.splice(_this.videos.indexOf(argument), 1);
                _this.onSave = false;
            }
        });
    };
    PlaylistComponent.prototype.onDeleteSubmit = function (id) {
        var _this = this;
        this.onSave = true;
        var objectToDelete = this.videos[id];
        this.videos.splice(id, 1);
        console.log(id);
        var argument = JSON.stringify(objectToDelete);
        console.log(objectToDelete);
        this.videoService.deleteVideoOfPlayList(argument).subscribe(function (data) {
            if (data.success) {
            }
            else {
                //this.flashMessagesService.show( data.msg, {cssClass: 'alert-primary', timeout: 3000});
                _this.loadDataBackground();
                //this.videos.push(objectToDelete);
            }
            _this.loadDataBackground();
            _this.onSave = false;
        });
    };
    PlaylistComponent.prototype.onSearchSubmit = function () {
        var _this = this;
        this.show = true;
        this.search = [];
        if (this.key != undefined && this.key != "") {
            var argument = {
                key: this.key
            };
            this.videoService.search(argument).subscribe(function (data) {
                if (data.success) {
                    _this.search = data.results;
                    _this.show = false;
                }
                else {
                    console.log(data.msg);
                    _this.show = false;
                }
            });
        }
    };
    PlaylistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-playlist',
            template: __webpack_require__("./src/app/components/playlist/playlist.component.html"),
            styles: [__webpack_require__("./src/app/components/playlist/playlist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_video_service__["a" /* VideoService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], PlaylistComponent);
    return PlaylistComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\r\n  <h2 class=\"page-header\">{{user.name}} {{user.lastname}}</h2>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\">Email : {{user.email}}</li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".cont{\r\n    margin: 40px;\r\n}\r\nimg {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n.mybtn {\r\n    width: 100%;\r\n    background-color: darkblue\r\n}"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cont\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-4\">\r\n\t\t  <img src=\"assets/login1.png\">\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-6\">\r\n\t\t  <form (ngSubmit)=\"onRegisterSubmit()\">\r\n        <fieldset>\r\n          <legend>Sign in</legend>\r\n          <hr>\r\n          <div class=\"control-group\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">Name</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lastname\" name=\"lastname\" placeholder=\"Name\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">First name</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"First name\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">Email</label>\r\n              <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\"  aria-describedby=\"emailHelp\" placeholder=\"ex : example@test.com\">\r\n              \r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputPassword1\">Password</label>\r\n              <input type=\"password\" class=\"form-control\"  [(ngModel)]=\"password\" name=\"password\" placeholder=\"password\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputPassword1\">Confirm</label>\r\n              <input type=\"password\" class=\"form-control\"  [(ngModel)]=\"confirmer\" name=\"confirmer\"  placeholder=\"confirm your password\">\r\n            </div>\r\n          \r\n            \r\n            <button type=\"submit\" class=\"btn btn-primary mybtn\">Sign in</button>\r\n          </div>\r\n        </fieldset>\r\n      </form>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessagesService, authService, router) {
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            lastname: this.lastname,
            email: this.email,
            password: this.password,
            confirmer: this.confirmer
        };
        if (!this.validateService.validateRegister(user)) {
            this.flashMessagesService.show('Veuillez remplir tout les champs', { cssClass: 'alert-primary', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessagesService.show('Veuillez utiliser un mail valide', { cssClass: 'alert-primary', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validatePassword(user.password, user.confirmer)) {
            this.flashMessagesService.show('Les 2 mots de passe ne sont pas identiques', { cssClass: 'alert-primary', timeout: 3000 });
            return false;
        }
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/login']);
                _this.flashMessagesService.show('Vous êtes maintenant inscrit, veuillez vous connectez', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.router.navigate(['/register']);
                _this.flashMessagesService.show('Une erreur est parvenue ' + data.msg, { cssClass: 'alert-primary', timeout: 3000 });
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/unauth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnauthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnauthGuard = /** @class */ (function () {
    function UnauthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    UnauthGuard.prototype.canActivate = function () {
        if (!this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/home']);
            return false;
        }
    };
    UnauthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], UnauthGuard);
    return UnauthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.loggedOut = function () {
        return !Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authenticateUser = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateLogin = function (user) {
        if (user.email == undefined || user.password == undefined) {
            return false;
        }
        return true;
    };
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.lastname == undefined || user.email == undefined || user.password == undefined || user.confirmer == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validatePassword = function (password, password1) {
        if (password != password1) {
            return false;
        }
        return true;
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/app/services/video.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoService = /** @class */ (function () {
    function VideoService(http) {
        this.http = http;
    }
    VideoService.prototype.getDataObservable = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("video/information?url_video=" + url, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    VideoService.prototype.getInformation = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Content-type', 'test/css');
        return this.http.get("video/informationId?id=" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    VideoService.prototype.getVideoOfPlayList = function (id_playlist) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('video/getvideosplaylist', id_playlist, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    VideoService.prototype.deleteVideoOfPlayList = function (argument) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('video/delete', argument, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    VideoService.prototype.addVideoOfPlayList = function (argument) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.post('video/newvideo', argument, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    VideoService.prototype.addVideoOfPlayListYoutube = function (argument) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.post('video/newvideoyoutube', argument, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    VideoService.prototype.getPlayListById = function (argument) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('playlist/getPlayList', argument, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    VideoService.prototype.getPlayList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('playlist/getplaylistuser', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    VideoService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    VideoService.prototype.addPlayList = function (playlist) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('playlist/newplaylist', playlist, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    VideoService.prototype.deletePlayList = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('playlist/deleteplaylist', id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    VideoService.prototype.getCount = function (id_playlist) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var argument = { id_playlist: id_playlist };
        return this.http.post('video/count', argument, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    VideoService.prototype.getCountByUser = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('video/countByUser', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    VideoService.prototype.search = function (argument) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('video/search', argument, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    VideoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], VideoService);
    return VideoService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map