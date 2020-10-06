The [Sass Module System](https://sass-lang.com/blog/the-module-system-is-launched)

Dart Sass is now the [primary implimentation](https://sass-lang.com/dart-sass) of Sass. LibSass is also part of it's [launch timeline](https://sass-lang.com/blog/the-module-system-is-launched#future-plans). However, there is currently no roadmap in place for node-sass to support. See [thread](https://github.com/sass/node-sass/issues/2886)

The `@import` rule will be deprecated on Oct 1, 2021 and all support dropped on Oct 1, 2022. [Source](https://sass-lang.com/blog/the-module-system-is-launched#future-plans)

Webpacks sass-loader documentation now [recommends](https://webpack.js.org/loaders/sass-loader/) using the dart (i.e. primary) implimentation over node-sass.
