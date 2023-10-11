"use strict";
exports.__esModule = true;
var react_1 = require("react");
var SidebarBtnElement_1 = require("./SidebarBtnElement");
var FormElements_1 = require("./FormElements");
var separator_1 = require("./ui/separator");
function FormElementsSidebar() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("p", { className: "text-sm text-foreground/70" }, "Drag and drop elements"),
        react_1["default"].createElement(separator_1.Separator, { className: "my-2" }),
        react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center" },
            react_1["default"].createElement("p", { className: "text-sm text-muted-foreground col-span-1 md:col-span-2 my-2 place-self-start" }, "Form elements"),
            react_1["default"].createElement(SidebarBtnElement_1["default"], { formElement: FormElements_1.FormElements.TextField }),
            react_1["default"].createElement(SidebarBtnElement_1["default"], { formElement: FormElements_1.FormElements.NumberField }),
            react_1["default"].createElement(SidebarBtnElement_1["default"], { formElement: FormElements_1.FormElements.TextAreaField }),
            react_1["default"].createElement(SidebarBtnElement_1["default"], { formElement: FormElements_1.FormElements.CheckboxField }))));
}
exports["default"] = FormElementsSidebar;
