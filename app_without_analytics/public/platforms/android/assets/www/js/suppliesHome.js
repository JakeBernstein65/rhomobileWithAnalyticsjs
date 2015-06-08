var suppliesHome = function() { //employee was originally passed in here, but since we are not rendering with a specific employee, it is not needed

  this.gaCall = function(){
   ga('send', 'pageview', {'page': '/my/GA-call'});
   alert("Ga page visited!");
  }

  this.gaEvent = function(){
    ga('send', 'event', 'category', 'action', {'page': '/my-new-page'});
    alert("Ga event!");
  }

  this.buy = function(){
    ga('ecommerce:addTransaction', {
  'id': '1234',                     // Transaction ID. Required.
  'affiliation': 'OfficeMax',   // Affiliation or store name.
  'revenue': '11.99',               // Grand Total.
  'shipping': '5',                  // Shipping.
  'tax': '1.29'                     // Tax.
    });
   ga('ecommerce:send');
   alert("Thanks for shopping!");
  }

  this.initialize = function() {
      this.$el = $('<div/>');
      this.$el.on('click', '.buy-btn', this.buy);
  };

  this.render = function() {
      this.$el.html(this.template(/*employee*/));
       ga('send', 'pageview', {'page': '/store'});
      return this;
  };

  this.addLocation = function(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(
      function(position) {
          alert(position.coords.latitude + ',' + position.coords.longitude);
      },
      function() {
          alert('Error getting location');
      });
    return false;
    };

    this.addToContacts = function(event) {
    event.preventDefault();
    ga('send', 'pageview', {'page': '/my/page'});
    if (!navigator.contacts) {
        alert("Contacts API not supported", "Error");
        return;
    }
    var contact = navigator.contacts.create();
    contact.name = {givenName: employee.firstName, familyName: employee.lastName};
    var phoneNumbers = [];
    phoneNumbers[0] = new ContactField('work', employee.officePhone, false);
    phoneNumbers[1] = new ContactField('mobile', employee.cellPhone, true);
    contact.phoneNumbers = phoneNumbers;
    contact.save();
    return false;
    };

    this.changePicture = function(event) {
        event.preventDefault();
        ga('send', 'pageview', {'page': '/my/page'});
        if (!navigator.camera) {
            alert("Camera API not supported", "Error");
                return;
        }
          var options =   {   quality: 50,
                              destinationType: Camera.DestinationType.DATA_URL,
                              sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Album
                              encodingType: 0     // 0=JPG 1=PNG
                          };

      navigator.camera.getPicture(
          function(imgData) {
              $('.media-object', this.$el).attr('src', "data:image/jpeg;base64,"+imgData);
          },
          function() {
              alert('Error taking picture', 'Error');
          },
          options);

        return false;
        };

  this.initialize();

}