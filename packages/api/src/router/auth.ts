import { z } from 'zod';
import { publicProcedure, router } from './trpc';

export const authRouter = router({
	getSession: publicProcedure
		.query(async ({ ctx, input }) => {
			return
		}),
});
