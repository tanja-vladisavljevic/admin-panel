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

    //Details-Graphic Design
    $("a#graphic-design").click(function() {
      $("input#cat-title").attr("value", "Graphic Design");
      $("#cat-description").val("Topics related to Graphic Design.");
      $("input#date-created").val("December 25, 2019");
      $("input#date-edited").val("/");
      console.log("graphic-design");
    });
    //Details-UI/UX Design
    $("a#ui-ux-design").click(function() {
      $("input#cat-title").attr("value", "UI/UX Design");
      $("#cat-description").val("Topics related to UI/UX Design.");
      $("input#date-created").val("December 25, 2019");
      $("input#date-edited").val("/");
      console.log("ui-ux-design");
    });
    //Details-Web Design
    $("a#web-design").click(function() {
      $("input#cat-title").attr("value", "Web Design");
      $("#cat-description").val("Topics related to Web Design.");
      $("input#date-created").val("December 25, 2019");
      $("input#date-edited").val("December 26, 2019");
      console.log("web-design");
    });
    //Details-Web Development
    $("a#web-dev").click(function() {
      $("input#cat-title").attr("value", "Web Development");
      $("#cat-description").val("Topics related to Web Development.");
      $("input#date-created").val("December 25, 2019");
      $("input#date-edited").val("/");
      console.log("web-dev");
    });
    //Details-Other
    $("a#other").click(function() {
      $("input#cat-title").attr("value", "Other");
      $("#cat-description").val("Miscellaneous topics related to IT.");
      $("input#date-created").val("December 25, 2019");
      $("input#date-edited").val("/");
      console.log("other");
    });
  });
}, 1000);
