
var useful_tools = function (service) {
	//var employeeListView;

	this.render = function() {
    this.$el.html(this.template());

    return this;
	};
	this.initialize = function () {
        // Define a div wrapper for the view (used to attach events)
        this.$el = $('<div/>');
        this.$el.on('click', '.add-location-btn', this.addLocation);
        this.render();
    };

    this.addLocation = function(event) {
  event.preventDefault();
  //ga('send', 'event', 'category', 'action', {'page': '/my-new-page'});
  ga('send', 'event', 'location', 'search', {'page': 'office/location'});
  navigator.geolocation.getCurrentPosition(
      function(position) {
          alert(position.coords.latitude + ',' + position.coords.longitude);
      },
      function() {
          alert('Error getting location');
      });
    return false;
    };

    this.initialize();
}

