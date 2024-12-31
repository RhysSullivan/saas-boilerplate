import { serverRouter } from './server';
import { authRouter } from './auth';
import { router } from './trpc';

export const appRouter = router({
	servers: serverRouter,
	auth: authRouter,
});

export type AppRouter = typeof appRouter;
