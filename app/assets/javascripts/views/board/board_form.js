TrelloClone.Views.boardForm = Backbone.CompositeView.extend({
  template: JST["board/board_form"],

  initialize: function(options) {
    var header = (this.model.isNew()) ? "New Board Playa" : "Edit Board?";
    var button_name = (this.model.isNew()) ? "Create Board" : "Confirm Changes";
  },

  events: {
    "submit form": "sendForm"
  },

  render: function() {
    this.$el.html(this.template({header: header, button_name: button_name}));
    return this;
  },

  sendForm: function(event) {
    event.preventDefault();

    var board = new TrelloClone.Models.Board();
    var formData = $(event.currentTarget).serializeJSON;

    board.save(formData, {
      success: function() {
        this.collection.add(board);
        Backbone.history.navigate("#/boards/" + board.id);
      }
    }.bind(this));
  }
});
