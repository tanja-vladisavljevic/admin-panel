//JavaScript
// Hide Sections
$(".section").hide();

setTimeout(function() {
  $(document).ready(function() {
    // Show sections
    $(".section").fadeIn();

    // Hide preloader
    $(".loader").fadeOut();

    //Init Side nav
    $(".sidenav").sidenav();
    //Account Sidenav options
    $(".sidenav#sidenav-account").sidenav({
      edge: "right"
    });

    //Init select
    $("select").formSelect();

    //Init Floating Button
    if ($("html").width() > 992) {
      $(".fixed-action-btn").floatingActionButton({
        direction: "left"
      });
      console.log("desktop");
    }
    //Init Floating Button - mobile
    if ($("html").width() < 993) {
      $(".fixed-action-btn").floatingActionButton({
        toolbarEnabled: true
      });
      console.log("mobile");
    }
    //Init dropdown
    $(".dropdown-trigger").dropdown({
      constrainWidth: false,
      hover: false,
      coverTrigger: false,
      alignment: "right"
    });

    //Init modal
    $(".modal").modal({
      dismissible: false
    });

    //Toast save Profile change
    $(".save-profile").click(function(e) {
      M.toast({ html: "Changes saved", displayLength: 3000 });
      e.preventDefault();
    });

    //Notifications click
    $("#notif-btn").click(function(e) {
      $("#notif-btn").removeClass("pulse");
    });

    //Search focus
    $("input#search-box").click(function(e) {
      $("#search-wrapper").addClass("search-wrapper-focus");
    });

    //Autocomplete init
    $(".autocomplete").autocomplete({
      data: {
        Profile: null,
        Settings: null,
        Users: null,
        Categories: null,
        Comments: null,
        Pages: null,
        Posts: null,
        Details: null,
        Add: null
      },
      limit: 20,
      minLength: 2
    });

    //Details-Home
    $("a#home").click(function() {
      $("input#page-title").attr("value", "Home");
      $("#page-description").val("Contains recent and popular blog posts.");
      $("input#date-created").val("December 24, 2019");
      $("input#date-edited").val("/");
      console.log("home");
    });

    //Details-About
    $("a#about").click(function() {
      $("input#page-title").attr("value", "About");
      $("#page-description").val("Contains data about the blog.");
      $("input#date-created").val("December 24, 2019");
      $("input#date-edited").val("December 24, 2019");
      console.log("about");
    });

    //Details-Categories
    $("a#categories").click(function() {
      $("input#page-title").attr("value", "Categories");
      $("#page-description").val("Contains blog post by categories.");
      $("input#date-created").val("January 14, 2020");
      $("input#date-edited").val("/");
      console.log("cat");
    });

    //Details-Contact
    $("a#contact").click(function() {
      $("input#page-title").attr("value", "Contact");
      $("#page-description").val("Contains contact information.");
      $("input#date-created").val("January 15, 2020");
      $("input#date-edited").val("/");
      console.log("contact");
    });
  });
}, 1000);
