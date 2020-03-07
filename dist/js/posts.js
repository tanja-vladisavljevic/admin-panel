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
  });
}, 1000);
