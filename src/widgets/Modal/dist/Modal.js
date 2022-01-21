"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Flex_1 = require("../../components/Flex/Flex");
var Svg_1 = require("../../components/Svg");
var icons_1 = require("../Menu/icons");
var StyledModal = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-size: contain;\n  height: auto;\n  background-repeat: no-repeat;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n\n  }\n"], ["\n  background-size: contain;\n  height: auto;\n  background-repeat: no-repeat;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var ModalHeader = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  text-align: right;\n  display: flex;\n  align-items: center;\n  // border-bottom: 1px solid #e9eaeb;\n  padding: 12px 24px;\n"], ["\n  text-align: right;\n  display: flex;\n  align-items: center;\n  // border-bottom: 1px solid #e9eaeb;\n  padding: 12px 24px;\n"])));
var ModalTitle = styled_components_1["default"](Flex_1["default"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var Logo = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  right: 0;\n  z-index: -1;\n  width: 60%;\n  top: 0;\n  text-align: end;\n"], ["\n  position: absolute;\n  right: 0;\n  z-index: -1;\n  width: 60%;\n  top: 0;\n  text-align: end;\n"])));
var ModalContent = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 374px;\n  margin-left: auto;\n  @media screen and (max-width: 768px) {\n    width: 300px;\n  }\n"], ["\n  width: 374px;\n  margin-left: auto;\n  @media screen and (max-width: 768px) {\n    width: 300px;\n  }\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c;
    return (react_1["default"].createElement(StyledModal, null,
        react_1["default"].createElement(Logo, null,
            react_1["default"].createElement(icons_1.Planet, null)),
        react_1["default"].createElement(ModalHeader, null, !hideCloseButton && (
        // <IconButton variant="text"  aria-label="Close the dialog">
        react_1["default"].createElement(Svg_1.CloseIcon, { color: "primary", onClick: onDismiss })
        // </IconButton>
        )),
        react_1["default"].createElement(ModalContent, null,
            react_1["default"].createElement(Flex_1["default"], { flexDirection: "column", p: bodyPadding }, children))));
};
exports["default"] = Modal;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
