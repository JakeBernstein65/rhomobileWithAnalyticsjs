var suppliesHome = function() {

  this.buy = function(){
   alert("Thanks for shopping!");
  }

  this.initialize = function() {
      this.$el = $('<div/>');
      this.$el.on('click', '.buy-btn', this.buy);
  };

  this.render = function() {
      this.$el.html(this.template());
      return this;
  };

  this.initialize();

}