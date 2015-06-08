var EmployeeView = function(employee) {

  this.gaCall = function(){
   ga('send', 'pageview', {'page': '/my/GA-call'});
   alert("Ga page visited!");
  }

  this.gaEvent = function(){
  	ga('send', 'event', 'category', 'action', {'page': '/my-new-page'});
  	alert("Ga event!");
  }

  this.contactSomeone = function(){
    ga('send', 'event', 'outreach', 'message', {'page': '/outreach/message'});
    alert("Message has been sent");
  }

  this.thumbsUp = function(){
   // ga('send', 'social', 'Zebra social network', 'like', 'http://zebranet.com'); //sends analytic for social interactions
   // ga('send', 'event', 'category', 'action', {'page': '/my-new-page'});
    ga('send', 'social', 'socialNetwork', 'like', 'socialTarget', {'page': '/my-social-page'});
    ga('send', {
  'hitType': 'social',
  'socialNetwork': 'facebook social network',
  'socialAction': 'like',
  'socialTarget': 'http://mycoolpage.com',
  'page': '/my-new-page'
    });

    ga('send', 'event', 'social', 'like', {'page': '/' + employee.firstName + '/like'});
    alert(employee.firstName + "'s great work has been noted!");
  }

  this.initialize = function() {
      this.$el = $('<div/>');
      this.$el.on('click', '.add-location-btn', this.addLocation);
      this.$el.on('click', '.contact-someone-btn', this.contactSomeone);
      this.$el.on('click', '.change-pic-btn', this.changePicture);
      this.$el.on('click', '.thumbs-up-btn', this.thumbsUp);
      this.$el.on('click', '.ga-btn', this.gaCall);
      this.$el.on('click', '.ga-event-btn', this.gaEvent);
  };

  this.render = function() {
      this.$el.html(this.template(employee));
      ga('send', 'pageview', {'page': '/social/' + employee.firstName});
      return this;
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
  		ga('send', 'event', 'picture', 'change', {'page': '/pic/change/' + employee.firstName});
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