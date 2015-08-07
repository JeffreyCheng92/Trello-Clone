TrelloClone.Views.boardIndex = Backbone.CompositeView.extend({
  template: JST["board/board_index"],

  initialize: function (options) {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addBoardListItem);

    this.collection.each(this.addBoardListItem.bind(this));
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();

    return this;
  },

  addBoardListItem: function(board) {
    var view = new TrelloClone.Views.boardItem({ model: board });
    this.addSubview('.board-list', view);
  },


});
