[viz](https://github.com/pierr/viz/tree/test)
===
A simple data vis example toolset using d3.js.

- Install nodejs, gitbash

- In the command prompt `npm install -g brunch bower`
- In the viz directory: `npm install` ,`bower install`
- In the viz directory to run the local server `brunch w -s` and then go to this [page](http://localhost:3333)

### Backbone Element
In a Backbone View.
```javascript
d3SelectInEl: function (selector) {
        return d3.select($(selector, this.$el)[0]);
}
```

## logiciels à installer
- http://www.inkscape.org/fr/telechargement/

## liens
http://handlebarsjs.com/
https://github.com/KleeGroup/focus/wiki/installation
https://developer.mozilla.org/fr/docs/Web/JavaScript
http://brunch.io/
http://nodejs.org/


## commit dans git
git add .
git add app/config.coffee
git commit -m 'Les message'
git push origin test
