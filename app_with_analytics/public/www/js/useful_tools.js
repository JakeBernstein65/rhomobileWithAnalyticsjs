
var useful_tools = function (service) {
	//var employeeListView;

	this.render = function() {
    this.$el.html(this.template());

    return this;
	};
	this.initialize = function () {
        // Define a div wrapper for the view (used to attach events)
        this.$el = $('<div/>');
        this.$el.on('click', '.help-btn', this.help);
        this.render();
    };

    this.help = function(event) {
  event.preventDefault();
  ga('send', 'event', 'IT', 'request help', {'page': 'IT/ticket/submit'});
  alert("IT will get back to you shortly");
    };

    this.initialize();
}

