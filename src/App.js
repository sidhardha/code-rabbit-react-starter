"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function App() {
    return (<div>
      <h1>Hello, CodeRabbit + React + TypeScript!</h1>
      <p>This is a sample React app with CI/CD, Docker, Jest, and ESLint configured.</p>
    </div>);
}
exports.default = App;
// The following files are not needed and cause lint errors because they are CommonJS/JS output with JSX, which ESLint cannot parse:
// - src/App.js
// - src/App.test.js
// These should be deleted. The TypeScript source files (App.tsx, App.test.tsx) are the correct files to lint and test.
