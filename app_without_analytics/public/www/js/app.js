// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    useful_tools.prototype.template = Handlebars.compile($("#tools-tpl").html());
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    EmployeeListView.prototype.template = Handlebars.compile($("#employee-list-tpl").html());
    EmployeeView.prototype.template = Handlebars.compile($("#employee-tpl").html());
    suppliesHome.prototype.template = Handlebars.compile($("#supplies-home-tpl").html());
    //supplies.prototype.template = Handlebars.compile($("#supplies-list-tpl").html());
    //item.prototype.template = Handlebars.compile($("#item-tpl").html());
    var service = new EmployeeService();
    var slider = new PageSlider($('body'));

    service.initialize().done(function () {
  
   router.addRoute('', function() {
      slider.slidePage(new useful_tools().render().$el);
  });

  router.addRoute('home', function() {
      slider.slidePage(new HomeView(service).render().$el);
  });

  router.addRoute('employees/:id', function(id) {
      service.findById(parseInt(id)).done(function(employee) {
          slider.slidePage(new EmployeeView(employee).render().$el);
      });
  });

  router.addRoute('supplies', function() {
      slider.slidePage(new suppliesHome(service).render().$el);
  });

        router.start();
    });

    /* --------------------------------- Event Registration -------------------------------- */
    document.addEventListener('deviceready', function () {
        StatusBar.overlaysWebView( false );
        StatusBar.backgroundColorByHexString('#ffffff');
        StatusBar.styleDefault();
        FastClick.attach(document.body);
    if (navigator.notification) { // Override default HTML alert with native dialog
      window.alert = function (message) {
          navigator.notification.alert(
              message,    // message
              null,       // callback
              "Workshop", // title
              'OK'        // buttonName
          );
      };
    }
        }, false);
    /* ---------------------------------- Local Functions ---------------------------------- */
   
}());
