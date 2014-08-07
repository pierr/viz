viz
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