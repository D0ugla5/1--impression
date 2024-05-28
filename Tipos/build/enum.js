"use strict";
//enum   DesignColors{
//  black = "#000000"
// white = "#FFFFFF"
//}
var StatusPermission;
(function (StatusPermission) {
    StatusPermission[StatusPermission["Admin"] = 0] = "Admin";
    StatusPermission[StatusPermission["User"] = 1] = "User";
})(StatusPermission || (StatusPermission = {}));
console.log(StatusPermission.Admin);
