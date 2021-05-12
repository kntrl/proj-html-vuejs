let mix = require("laravel-mix");

mix.js("src/app.js", "dist/").vue({ version: 2 });
mix.sass("src/app.scss", "dist/").options({
	processCssUrls: false,
});
