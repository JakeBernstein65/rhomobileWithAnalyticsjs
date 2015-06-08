var EmployeeView = function(employee) {
  var self = this;  

  this.contactSomeone = function(){
    ga('send', 'event', 'outreach', 'message', {'page': '/outreach/message'});
    alert("Message has been sent");
  }

  this.thumbsUp = function(){
    ga('send', 'social', 'Zebra social network', 'like', {'page': '/' + employee.firstName + '/like'});


    alert(employee.firstName + "'s great work has been noted!");
  }
  
  this.initialize = function() {
      self.$el = $('<div/>');
      self.$el.on('click', '.contact-someone-btn', this.contactSomeone);
      self.$el.on('click', '.thumbs-up-btn', this.thumbsUp);
  };

  this.render = function() {
      this.$el.html(this.template(employee));
      ga('send', 'pageview', {'page': '/socialMedia/' + employee.firstName});
      return this;
  };

  this.initialize();

}