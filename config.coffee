exports.config =
  sourceMaps: false
  files:
    javascripts:
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^(bower_components|vendor)/
    stylesheets:
      joinTo: 'stylesheets/app.css'
    templates:
      default: 'hbs'
      joinTo: 'javascripts/app.js'