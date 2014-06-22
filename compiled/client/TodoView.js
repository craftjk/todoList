// Generated by CoffeeScript 1.7.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.TodoView = (function(_super) {
    __extends(TodoView, _super);

    function TodoView() {
      return TodoView.__super__.constructor.apply(this, arguments);
    }

    TodoView.prototype.tagName = 'li';

    TodoView.prototype.initialize = function() {
      return this.render();
    };

    TodoView.prototype.render = function() {
      return this.$el.html(this.model.get('title'));
    };

    return TodoView;

  })(Backbone.View);

}).call(this);

//# sourceMappingURL=TodoView.map