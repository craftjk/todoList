// Generated by CoffeeScript 1.7.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.TodoModel = (function(_super) {
    __extends(TodoModel, _super);

    function TodoModel() {
      return TodoModel.__super__.constructor.apply(this, arguments);
    }

    TodoModel.prototype.defaults = {
      title: "",
      completed: false
    };

    return TodoModel;

  })(Backbone.Model);

}).call(this);

//# sourceMappingURL=TodoModel.map