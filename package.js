Package.describe({
  name: 'storyteller:uikit-less',
  version: '2.21.0',
  // Brief, one-line summary of the package.
  summary: 'A lightweight and modular front-end framework for developing fast and powerful web interfaces.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/AdwinTrave/uikit',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('less', ['client', 'server']);
  api.imply('less', ['client', 'server']);
  api.use(['ui', 'jquery', 'templating'], 'client');
  //api.addFiles('uikit-less.js');

  //fonts
  api.addFiles(['src/fonts/FontAwesome.otf',
  'src/fonts/fontawesome-webfont.eot',
  'src/fonts/fontawesome-webfont.ttf',
  'src/fonts/fontawesome-webfont.woff',
  'src/fonts/fontawesome-webfont.woff2'], "client");

  //javascript core
  api.addFiles(['src/js/core/core.js',
  'src/js/core/alert.js',
  'src/js/core/button.js',
  'src/js/core/cover.js',
  'src/js/core/dropdown.js',
  'src/js/core/grid.js',
  'src/js/core/modal.js',
  'src/js/core/nav.js',
  'src/js/core/offcanvas.js',
  'src/js/core/scrollspy.js',
  'src/js/core/smooth-scroll.js',
  'src/js/core/switcher.js',
  'src/js/core/tab.js',
  'src/js/core/toggle.js',
  'src/js/core/touch.js',
  'src/js/core/utility.js'], "client");

  //javascript components
  api.addFiles(['src/js/components/accordion.js',
  'src/js/components/autocomplete.js',
  'src/js/components/datepicker.js',
  'src/js/components/form-password.js',
  'src/js/components/form-select.js',
  'src/js/components/grid.js',
  'src/js/components/htmleditor.js',
  'src/js/components/lightbox.js',
  'src/js/components/nestable.js',
  'src/js/components/notify.js',
  'src/js/components/pagination.js',
  'src/js/components/parallax.js',
  'src/js/components/search.js',
  'src/js/components/slider.js',
  'src/js/components/slideset.js',
  'src/js/components/slideshow.js',
  'src/js/components/slideshow-fx.js',
  'src/js/components/sortable.js',
  'src/js/components/sticky.js',
  'src/js/components/timepicker.js',
  'src/js/components/tooltip.js',
  'src/js/components/upload.js'], "client");

  //vendor files
  api.addFiles(['vendor/commonmark.js',
  'vendor/holder.js',
  'vendor/marked.js',
  'vendor/codemirror/codemirror.js',
  'vendor/codemirror/codemirror.css',
  'vendor/codemirror/show-hint.css',
  'vendor/highlight/highlight.js',
  'vendor/highlight/highlight.css',
  'vendor/spectrum/spectrum.js',
  'vendor/spectrum/spectrum.css'], "client");
});

Package.onTest(function(api) {
  api.use('storyteller:uikit-less');
  api.use(["less", "tinytest", "test-helpers", "templating"]);
  //api.addFiles('uikit-less-tests.js');
});
