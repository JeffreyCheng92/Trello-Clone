TrelloClone.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "boardIndex",
    "boards/new": "boardNew",
    "boards/:id": "boardShow",
  },

  initialize: function(options) {
    this.boards = options.boards;
    this.$rootEl = options.$rootEl;
  },

  boardIndex: function(){
    this.boards.fetch();
    var index = new TrelloClone.Views.boardIndex({collection: this.boards});
    this.swapView(index);
  },

  boardShow: function(id) {
    var board = this.boards.getOrFetch(id);
    var show = new TrelloClone.Views.boardShow({
      model: board
    });
    this.swapView(show);
  },

  boardNew: function() {
    var board = new TrelloClone.Models.Board();
    var newForm = new TrelloClone.Views.boardForm({
      collection: this.boards,
      model: board
    });
    this.swapView(newForm);
  },

  swapView: function(view) {
    if (this._currentView) {
      this._currentView.remove();
    }
    this._currentView = view;
    this.$rootEl.html(this._currentView.render().$el);
  },

});
