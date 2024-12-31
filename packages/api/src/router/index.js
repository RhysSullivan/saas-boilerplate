"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
var server_1 = require("./server");
var auth_1 = require("./auth");
var trpc_1 = require("./trpc");
exports.appRouter = (0, trpc_1.router)({
    servers: server_1.serverRouter,
    auth: auth_1.authRouter,
});
