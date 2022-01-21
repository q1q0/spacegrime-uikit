"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Button_1 = require("../../components/Button/Button");
var WalletModal_1 = require("../WalletModal");
var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = WalletModal_1.useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    return (react_1["default"].createElement("div", null, account ? (react_1["default"].createElement(Button_1["default"], { size: "md", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        }, style: { padding: '20px' } }, accountEllipsis)) : (react_1["default"].createElement(Button_1["default"], { size: "md", onClick: function () {
            onPresentConnectModal();
        }, style: { padding: '20px' } }, "Connect"))));
};
exports["default"] = UserBlock;
