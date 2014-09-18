/**
 * D3 plugin for rendering the gantt tasks.
 * @return {class}
 */
var Gantt = (function() {

  /**
   * Constructeur de la fonction de validation.
   * @param {object} options - JSON containing options and data.
   */
  function Gantt(options) {
    this.options = options || {};
    console.log(options);
    this.data = this.options.data;
    this.el = d3.select(this.options.container);
    this.processRenderingMetrics();
    this.initializeTip();
    this.processTimeDomains();
    this.processAxis();
  }

  Gantt.prototype.processRenderingMetrics = function(){
    /**
     * Process the margin attributes for the component.
     * @type {[type]}
     */
    this.margin = this.options.margin || {
      top: 20,
      right: 40,
      bottom: 20,
      left: 150
    };
    this.svgConf = {
      height : options.height || 300,
      width: options.width || 700
    };
    this.h = document.body.clientHeight < this.svgConf.height ? this.svgConf.height : document.body.clientHeight;
    this.w = document.body.clientWidth < this.svgConf.width ? this.svgConf.width : document.body.clientWidth;
    this.height = h - margin.top - margin.bottom - 5;
    this.width = w - margin.right - margin.left - 5;
  };

  /**
   * Initialize the tip rendering.
   * @return {[type]} [description]
   */
  Gantt.prototype.initializeTip = function() {
    this.tip = {};
    this.tip.template = this.options.tipTemplate || function() {
      return "No tip template...";
    };
    /**
     * Create a tip element into d3.
     * @type {d3tip}
     */
    this.tip.el = d3.tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(this.tip.template);
    this.el.call(this.tip);
    return this;
  };

  /**
   * Get the time domains values depending on the tasks values.
   * @return {[type]} [description]
   */
  Gantt.prototype.processTimeDomains = function() {
    var tasks = this.data || [];
    if (tasks === undefined || tasks.length === 0) {
      this.timeDomainStart = d3.time.day.offset(new Date(), -3);
      this.timeDomainEnd = d3.time.hour.offset(new Date(), +3);

    } else {
      //Sort the tasks by ending date.
      tasks.sort(function(a, b) {
        return a.endDate - b.endDate;
      });
      this.timeDomainEnd = tasks[tasks.length - 1].endDate;
      //Sort the tasks by starting date.
      tasks.sort(function(a, b) {
        return a.startDate - b.startDate;
      });
      this.timeDomainStart = tasks[0].startDate;
    }
    return this;

  };
  Gantt.prototype.processAxis = function() {
    //Create a 
    this.x = d3.time.scale().domain([this.timeDomainStart, this.timeDomainEnd]).range([0, this.width]).clamp(true);
    this.y = d3.scale.ordinal().domain(taskTypes).rangeRoundBands([0, this.height - this.margin.top - this.margin.bottom], 0.1);
    this.xAxis = d3.svg.axis().scale(this.x).orient("bottom").tickFormat(d3.time.format(this.tickFormat)).tickSubdivide(true)
      .tickSize(8).tickPadding(8);
    this.yAxis = d3.svg.axis().scale(this.y).orient("left").tickSize(0);
  };

  /**
   * Render the svg structure.
   * @return {this}
   */
  Gantt.prototype.renderStructure =  function(){
    return this.el.append("svg")
                  .attr("class", "chart")
                  .attr("width", this.width + this.margin.left + this.margin.right)
                  .attr("height", this.height + this.margin.top + this.margin.bottom)
                  .append("g")
                  .attr("class", "gantt-chart")
                  .attr("width", this.width + this.margin.left + this.margin.right)
                  .attr("height", this.height + this.margin.top + this.margin.bottom)
                  .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");

  };

  /**
   * Render the d3 component.
   * @return {[type]} [description]
   */
  Gantt.prototype.render = function() {
    //
    this.renderStructure();
    return this;
  };

  return Gantt;

})();