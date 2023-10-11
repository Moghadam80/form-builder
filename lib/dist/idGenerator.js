"use strict";
exports.__esModule = true;
exports.idGenerator = void 0;
function idGenerator() {
    return Math.floor(Math.random() * 10001).toString();
}
exports.idGenerator = idGenerator;
