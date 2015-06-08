var EmployeeView = function(employee) {
  var self = this;  

  this.contactSomeone = function(){
    alert("Message has been sent");
  }

  this.thumbsUp = function(){
    alert(employee.firstName + "'s great work has been noted!");
  }
  
  this.initialize = function() {
      self.$el = $('<div/>');
      self.$el.on('click', '.contact-someone-btn', this.contactSomeone);
      self.$el.on('click', '.thumbs-up-btn', this.thumbsUp);
  };

  this.render = function() {
      this.$el.html(this.template(employee));
      return this;
  };

  this.initialize();

}