import { createTRPCReact } from '@trpc/react-query';

import { type AppRouter } from '@acme/api/index';

export const trpc = createTRPCReact<AppRouter>({});
