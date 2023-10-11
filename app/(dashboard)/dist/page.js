"use strict";
exports.__esModule = true;
var separator_1 = require("@/components/ui/separator");
var CreateFormBtn_1 = require("@/components/CreateFormBtn");
function Home() {
    return (React.createElement("div", { className: "container pt-4" },
        React.createElement(separator_1.Separator, { className: "my-6" }),
        React.createElement("h2", { className: "text-4xl font-bold col-span-2" }, "Your forms"),
        React.createElement(separator_1.Separator, { className: "my-6" }),
        React.createElement("div", { className: "grid gric-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" },
            React.createElement(CreateFormBtn_1["default"], null))));
}
exports["default"] = Home;
