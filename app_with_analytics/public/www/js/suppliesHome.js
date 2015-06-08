var suppliesHome = function() {

  this.buy = function(){
   ga('send', 'event', 'shopping', 'purchase', {'page': 'store/supplies'});
   alert("Thanks for shopping!");
  }

  this.initialize = function() {
      this.$el = $('<div/>');
      this.$el.on('click', '.buy-btn', this.buy);
  };

  this.render = function() {
      this.$el.html(this.template());
       ga('send', 'pageview', {'page': '/store'});
      return this;
  };

  this.initialize();

}