"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicProcedure = exports.router = void 0;
var server_1 = require("@trpc/server");
var superjson_1 = require("superjson");
var t = server_1.initTRPC
    .context()
    .meta()
    .create({
    transformer: superjson_1.default,
    errorFormatter: function (_a) {
        var shape = _a.shape;
        return shape;
    },
    defaultMeta: {
        tenantAuthAccessible: false,
    },
});
exports.router = t.router;
var procedureBase = t.procedure;
exports.publicProcedure = procedureBase;
