TrelloClone.Views.boardShow = Backbone.CompositeView.extend({
  template: JST["board/board_show"],

  initialize: function(options) {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    this.$el.empty();
    var content = this.template({board: this.model});
    this.$el.html(content);
    return this;
  },
});
