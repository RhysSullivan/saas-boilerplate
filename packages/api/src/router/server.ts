import { z } from 'zod';
import { publicProcedure, router } from './trpc';

export const serverRouter = router({
	byId: publicProcedure
		.input(z.string())
		.query(async ({ ctx, input }) => {
			return
		}),
});
