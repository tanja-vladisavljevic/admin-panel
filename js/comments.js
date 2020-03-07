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

    // Comments - Approve & Deny
    $(".approve").click(function(e) {
      M.toast({ html: "Comment Approved", displayLength: 3000 });
      e.preventDefault();
    });
    $(".deny").click(function(e) {
      M.toast({ html: "Comment Denied", displayLength: 3000 });
      e.preventDefault();
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

    //Details-Person 1
    $("a#person1").click(function() {
      $("img#user-img").attr("src", "img/users/person1.jpg");
      $("input#user-name").val("Jane Doe");
      $("textarea#comment").val("This new idea is revolutionary!");
      $("input#date-posted").val("January 30, 2020");
      $("input#post").val("Post One");
      $("input#category").val("Web Development");
      console.log("");
    });
    //Details-Person 2
    $("a#person2").click(function() {
      $("img#user-img").attr("src", "img/users/person2.jpg");
      $("input#user-name").val("Phill Knowles");
      $("textarea#comment").val(
        "I have to disagree with the autor. I think that the old designs look much better."
      );
      $("input#date-posted").val("January 31, 2020");
      $("input#post").val("Post Two");
      $("input#category").val("Graphic Design");
      console.log("");
    });
    //Details-Person 3
    $("a#person3").click(function() {
      $("img#user-img").attr("src", "img/users/person3.jpg");
      $("input#user-name").val("Mark Johnson");
      $("textarea#comment").val(
        "Wow! Great idea. I completely agree that this will be the new trendsetter for 2020."
      );
      $("input#date-posted").val("February 1, 2020");
      $("input#post").val("Post One");
      $("input#category").val("Web Design");
      console.log("");
    });
  });
}, 1000);
