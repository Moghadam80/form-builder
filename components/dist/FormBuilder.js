"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var PreviewDialogBtn_1 = require("./PreviewDialogBtn");
var Designer_1 = require("./Designer");
var core_1 = require("@dnd-kit/core");
var DragOverlayWrapper_1 = require("./DragOverlayWrapper");
var useDesigner_1 = require("./hooks/useDesigner");
var im_1 = require("react-icons/im");
var hi_1 = require("react-icons/hi");
var button_1 = require("./ui/button");
var react_confetti_1 = require("react-confetti");
var react_json_view_1 = require("react-json-view");
var Link_1 = require("next/Link");
var bs_1 = require("react-icons/bs");
function FormBuilder(_a) {
    var name = _a.name;
    var elements = useDesigner_1["default"]().elements;
    var _b = useDesigner_1["default"](), setElements = _b.setElements, setSelectedElement = _b.setSelectedElement;
    var _c = react_1.useState(false), isReady = _c[0], setIsReady = _c[1];
    var _d = react_1.useState(null), show = _d[0], setShow = _d[1];
    var mouseSensor = core_1.useSensor(core_1.MouseSensor, {
        activationConstraint: {
            distance: 10
        }
    });
    var touchSensor = core_1.useSensor(core_1.TouchSensor, {
        activationConstraint: {
            delay: 300,
            tolerance: 5
        }
    });
    var sensors = core_1.useSensors(mouseSensor, touchSensor);
    react_1.useEffect(function () {
        if (isReady)
            return;
        // const elements = JSON.parse(form.content);
        // setElements(elements);
        setSelectedElement(null);
        var readyTimeout = setTimeout(function () { return setIsReady(true); }, 500);
        return function () { return clearTimeout(readyTimeout); };
    }, [setElements, isReady, setSelectedElement]);
    function save() {
        var jsonElements = JSON.stringify(elements);
        setShow(elements);
    }
    if (!isReady) {
        return (react_1["default"].createElement("div", { className: "flex flex-col items-center justify-center w-full h-full" },
            react_1["default"].createElement(im_1.ImSpinner2, { className: "animate-spin h-12 w-12" })));
    }
    return !show ? (react_1["default"].createElement(core_1.DndContext, { sensors: sensors },
        react_1["default"].createElement("main", { className: "flex flex-col w-full" },
            react_1["default"].createElement("nav", { className: "flex justify-between border-b-2 p-4 gap-3 items-center" },
                react_1["default"].createElement("h2", { className: "truncate font-medium" },
                    react_1["default"].createElement("span", { className: "text-muted-foreground mr-2" }, "Form:"),
                    name),
                react_1["default"].createElement("div", { className: "flex items-center gap-2" },
                    react_1["default"].createElement(PreviewDialogBtn_1["default"], null),
                    react_1["default"].createElement(button_1.Button, { variant: "outline", className: "gap-2", onClick: save },
                        react_1["default"].createElement(hi_1.HiSaveAs, { className: "h-4 w-4" }),
                        "Save"))),
            react_1["default"].createElement("div", { className: "flex w-full flex-grow items-center justify-center relative overflow-y-auto h-[200px] bg-accent bg-[url(/paper.svg)] dark:bg-[url(/paper-dark.svg)]" },
                react_1["default"].createElement(Designer_1["default"], null))),
        react_1["default"].createElement(DragOverlayWrapper_1["default"], null))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_confetti_1["default"], { width: window.innerWidth, height: window.innerHeight, recycle: false, numberOfPieces: 1000 }),
        react_1["default"].createElement("div", { className: "flex flex-col items-center justify-center h-screen w-full" },
            react_1["default"].createElement("div", { className: "max-w-md" },
                react_1["default"].createElement("h1", { className: "text-center text-4xl font-bold text-primary border-b pb-2 mb-10" }, "Form Json"),
                react_1["default"].createElement("div", { className: "my-4 flex flex-col gap-2 items-center w-full shadow-xl rounded-xl bg-gray-200 p-4 w-[500px] h-[500px] overflow-y-scroll" },
                    react_1["default"].createElement(react_json_view_1["default"], { src: show })),
                react_1["default"].createElement("div", { className: "flex justify-between" },
                    react_1["default"].createElement(button_1.Button, { variant: "link", asChild: true },
                        react_1["default"].createElement(Link_1["default"], { href: "/", className: "gap-2" },
                            react_1["default"].createElement(bs_1.BsArrowLeft, null),
                            "Go back home")))))));
}
exports["default"] = FormBuilder;
