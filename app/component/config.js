module.exports = {
  svg:{
    width: 1920,
    height: 1080
  },
  margin:{
    top: 100,
    right: 100,
    bottom: 100,
    left: 100
  },
  getWidth: function(){
    return this.svg.width - this.margin.left - this.margin.right;
  },
  getHeight :function(){
    return this.svg.height - this.margin.top - this.margin.bottom;
  },
  toJSON: function(){
    return {
      width: this.getWidth(),
      height: this.getHeight()
    };
  }
};