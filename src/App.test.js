"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_2 = require("@testing-library/react");
var App_1 = require("./App");
test('renders hello message', function () {
    (0, react_2.render)(<App_1.default />);
    var heading = react_2.screen.getByText(/Hello, CodeRabbit \+ React \+ TypeScript!/i);
    expect(heading).toBeInTheDocument();
});
