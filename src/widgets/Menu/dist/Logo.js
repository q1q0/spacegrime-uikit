"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var react_router_dom_1 = require("react-router-dom");
var Svg_1 = require("../../components/Svg");
var Flex_1 = require("../../components/Flex/Flex");
var icons_1 = require("./icons");
var MenuButton_1 = require("./MenuButton");
var StyledLink = styled_components_1["default"](react_router_dom_1.Link)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Logo = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Svg_1.LogoIcon, { className: "mobile-icon" }),
        react_1["default"].createElement(icons_1.LogoIcon, { className: "desktop-icon", isDark: isDark })));
    return (react_1["default"].createElement(Flex_1["default"], null,
        react_1["default"].createElement(MenuButton_1["default"], { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px" }, isPushed ? (react_1["default"].createElement(icons_1.HamburgerCloseIcon, { width: "24px", color: "textSubtle" })) : (react_1["default"].createElement(icons_1.HamburgerIcon, { width: "24px", color: "textSubtle" })))));
};
exports["default"] = Logo;
var templateObject_1;
