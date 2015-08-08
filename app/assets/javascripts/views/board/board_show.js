TrelloClone.Views.boardShow = Backbone.CompositeView.extend({
  template: JST["board/board_show"],

  initialize: function(options) {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click .board-delete": "deleteBoard"
  },

  render: function() {
    this.$el.empty();
    var content = this.template({board: this.model});
    this.$el.html(content);
    return this;
  },

  deleteBoard: function(event) {
    event.preventDefault();
    this.model.destroy({
      success: function() {
        Backbone.history.navigate("#", {trigger: true});
      }
    });
  },


});
