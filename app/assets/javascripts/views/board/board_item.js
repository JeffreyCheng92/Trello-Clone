TrelloClone.Views.boardItem = Backbone.CompositeView.extend({
  template: JST["board/board_item"],

  initialize: function (options) {
    // this.listenTo(this.collection, "sync", this.render);
    // this.listenTo(this.collection, "add", this.addBoardListItem);
    //
    // this.collection.each(this.addBoardListItem.bind(this));
  },

  render: function () {
    var board = this.model; // must keep this line because jshint mad about options hash below
    this.$el.html(this.template( {board: board} ));
    return this;
  },


});
