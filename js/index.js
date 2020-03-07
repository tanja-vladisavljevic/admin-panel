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

    // Counter
    $(".count").each(function() {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text()
          },
          {
            duration: 1000,
            easing: "swing",
            step: function(now) {
              $(this).text(Math.ceil(now));
            }
          }
        );
    });

    // Comments - Approve & Deny
    $(".approve").click(function(e) {
      M.toast({ html: "Comment Approved", displayLength: 3000 });
      e.preventDefault();
    });
    $(".deny").click(function(e) {
      M.toast({ html: "Comment Denied", displayLength: 3000 });
      e.preventDefault();
    });

    //Quick Todos - Add
    $("#todo-form").submit(function(e) {
      const output = `<li class="collection-item">
            <div>
              ${$("#todo").val()}
              <a href="#" class="secondary-content delete">
                <i class="material-icons light-blue-text text-darken-4">close</i>
              </a>
            </div>
          </li>`;
      $(".todos").append(output);
      e.preventDefault();
      M.toast({ html: "Todo added!", displayLength: 3000 });
    });

    //Quick Todos - Delete
    $(".todos").on("click", ".delete", function(e) {
      $(this)
        .parent()
        .parent()
        .remove();
      e.preventDefault();
      M.toast({
        html: "Todo removed!",
        displayLength: 3000
      });
    });

    //Toast save Profile change
    $(".save-profile").click(function(e) {
      M.toast({ html: "Changes saved", displayLength: 3000 });
      e.preventDefault();
    });

    //Tabs init
    $(".tabs").tabs();

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

    CKEDITOR.replace("body");
  });
}, 1000);
