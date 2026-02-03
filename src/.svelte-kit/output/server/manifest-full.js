export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","assets/111-coding.png","assets/buried-voices-cover.png","assets/business-card.png","assets/call-of-karen-couch-splash.png","assets/call-of-karen-cover.png","assets/day22-owl.png","assets/denfaminico.jpg","assets/escaperoom-car.jpg","assets/escaperoom-map.jpg","assets/escaperoom-screen.jpg","assets/escaperoom-train.jpg","assets/formoid/formoid.min.js","assets/hand-empty.png","assets/holiday-escape-cover.png","assets/jhdb-cover.png","assets/jhdb-screenshot-form.png","assets/jhdb-screenshot-landing.png","assets/logo.png","assets/mirror-cover.png","assets/profile.png","contact.html","favicon-16x16.png","favicon-32x32.png","favicon.ico","resume.pdf","site.webmanifest","test.html","vercel.svg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".js":"text/javascript",".html":"text/html",".pdf":"application/pdf",".webmanifest":"application/manifest+json",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.CumkQ1e2.js",app:"_app/immutable/entry/app.Ht4yYCp8.js",imports:["_app/immutable/entry/start.CumkQ1e2.js","_app/immutable/chunks/Bc7C3LZ5.js","_app/immutable/chunks/PRDOKluM.js","_app/immutable/chunks/BUielRHo.js","_app/immutable/entry/app.Ht4yYCp8.js","_app/immutable/chunks/PRDOKluM.js","_app/immutable/chunks/BfNRboca.js","_app/immutable/chunks/C8KfHP2g.js","_app/immutable/chunks/BUielRHo.js","_app/immutable/chunks/BUEZhtbe.js","_app/immutable/chunks/BSNJucEt.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projects/[slug]",
				pattern: /^\/projects\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
