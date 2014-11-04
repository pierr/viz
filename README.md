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
### Documentation du code
Au dessus d'un objet / fonction js faire
/***/ puis se placer après la deuxième étoile et faire entrer.

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


### Dépendances
- Underscore https://www.npmjs.org/package/underscore
- Mocha test unitaire http://mochajs.org/ et la syntaxe de test: http://chaijs.com/api/bdd/
- Bower dependances des librairies côté navgateur http://bower.io/search/?q=d3, bower install --save nomDeLaLibrairie, exemple d3 `bower install --save d3`
- Npm dépendance des librairies côté nodejs.   `npm install --save underscore`


Debug 
 npm install -g node-inspector
