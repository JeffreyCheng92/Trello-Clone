window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var boards = new TrelloClone.Collections.Boards();
    new TrelloClone.Routers.Router({
      boards: boards,
      $rootEl: $('#root')
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
