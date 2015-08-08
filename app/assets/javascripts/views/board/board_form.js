TrelloClone.Views.boardForm = Backbone.CompositeView.extend({
  template: JST["board/board_form"],

  initialize: function(options) {

  },

  events: {
    "submit form": "sendForm"
  },

  render: function() {
    var header = (this.model.isNew()) ? "New Board Playa" : "Edit Board?";
    var button_name = (this.model.isNew()) ? "Create Board" : "Confirm Changes";
    debugger
    this.$el.html(this.template({
      header: header,
      button_name: button_name,
      board: this.model
    }));
    return this;
  },

  sendForm: function(event) {
    event.preventDefault();

    var board = new TrelloClone.Models.Board();
    var formData = $(event.currentTarget).serializeJSON();

    board.save(formData.board, {
      success: function() {
        this.collection.add(board);
        Backbone.history.navigate("#/boards/" + board.id);
      }.bind(this)
    });
  }
});
