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

    //Init select
    $("select").formSelect();

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

    // Users - Save & Delete
    $(".save").click(function(e) {
      M.toast({ html: "User saved", displayLength: 3000 });
      e.preventDefault();
    });
    $(".delete").click(function(e) {
      M.toast({ html: "User deleted", displayLength: 3000 });
      e.preventDefault();
    });

    //Details-User1
    $("a#user-1").click(function() {
      $("img#user-img").attr("src", "img/users/person1.jpg");
      $("input#user-name").val("Jane Doe");
      $("input#user-email").val("janedoe@mail.com");
      $("input#date-registered").val("December 25, 2019");
      $("input#user-type").val("Admin");

      console.log("");
    });
    //Details-User2
    $("a#user-2").click(function() {
      $("img#user-img").attr("src", "img/users/person2.jpg");
      $("input#user-name").val("Phill Knowles");
      $("input#user-email").val("pknowles@mail.com");
      $("input#date-registered").val("January 3, 2020");
      $("input#user-type").val("Subscriber");

      console.log("");
    });
    //Details-User3
    $("a#user-3").click(function() {
      $("img#user-img").attr("src", "img/users/person3.jpg");
      $("input#user-name").val("Mark Johnson");
      $("input#user-email").val("markjohnson@mail.com");
      $("input#date-registered").val("January 18, 2020");
      $("input#user-type").val("Subscriber");

      console.log("");
    });
  });
}, 1000);
