"use strict";
exports.__esModule = true;
require("./globals.css");
var FormContext_1 = require("@/components/context/FormContext");
var DesignerContext_1 = require("@/components/context/DesignerContext");
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", null,
            React.createElement(FormContext_1["default"], null,
                React.createElement(DesignerContext_1["default"], null, children)))));
}
exports["default"] = RootLayout;
