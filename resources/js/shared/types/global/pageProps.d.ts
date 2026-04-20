import { type User } from './models';
import { type Config } from 'ziggy-js';

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
    app_url: string;
    locale: string;
    flash: {
        success: string | null;
        error: string | null;
    };
};
