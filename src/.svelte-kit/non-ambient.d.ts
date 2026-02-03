
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about" | "/projects" | "/projects/[slug]";
		RouteParams(): {
			"/projects/[slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { slug?: string };
			"/about": Record<string, never>;
			"/projects": { slug?: string };
			"/projects/[slug]": { slug: string }
		};
		Pathname(): "/" | "/about" | "/about/" | "/projects" | "/projects/" | `/projects/${string}` & {} | `/projects/${string}/` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/android-chrome-192x192.png" | "/android-chrome-512x512.png" | "/apple-touch-icon.png" | "/assets/111-coding.png" | "/assets/buried-voices-cover.png" | "/assets/business-card.png" | "/assets/call-of-karen-couch-splash.png" | "/assets/call-of-karen-cover.png" | "/assets/day22-owl.png" | "/assets/denfaminico.jpg" | "/assets/escaperoom-car.jpg" | "/assets/escaperoom-map.jpg" | "/assets/escaperoom-screen.jpg" | "/assets/escaperoom-train.jpg" | "/assets/formoid/formoid.min.js" | "/assets/hand-empty.png" | "/assets/holiday-escape-cover.png" | "/assets/jhdb-cover.png" | "/assets/jhdb-screenshot-form.png" | "/assets/jhdb-screenshot-landing.png" | "/assets/logo.png" | "/assets/mirror-cover.png" | "/assets/profile.png" | "/contact.html" | "/favicon-16x16.png" | "/favicon-32x32.png" | "/favicon.ico" | "/resume.pdf" | "/site.webmanifest" | "/test.html" | "/vercel.svg" | string & {};
	}
}