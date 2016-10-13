$(document).ready(function() {
  $("#submit_info").click(function() {
    var firstName = $("#first_name").val();
    var lastName = $("#last_name").val();
    var email = $("#email_address").val();
    var isValid = true;

    if(firstName == "") {
      $("#first_name").next().text("This field cannot be empty.");
      isValid = false;
    } else {
      $("#first_name").next().text("");
    }

    if(lastName == "") {
      $("#last_name").next().text("This field cannot be empty.");
      isValid = false;
    } else {
      $("#last_name").next().text("");
    }

    if(email == "") {
      $("#email_address").next().text("This field cannot be empty.");
      isValid = false;
    } else {
      $("#email_address").next().text("");
    }

    if(isValid) {
      drawTable(firstName, lastName, email);
    }

  });
});
window.onLoad = function() {
  $("submit_info").submit();
}

function hideForm(id) {

}

function drawTable(firstName, lastName, email) {
  document.write("<table border=\"1\" cellPadding=\"1\" cellSpacing=\"1\" style=\"width:200px;\">");

  document.write("<tbody>");

  document.write("<tr><td>" + "First Name" + "</td>");
  document.write("<td>" + firstName + "</td></tr>");

  document.write("<tr><td>" + "Last Name" + "</td>");
  document.write("<td>" + lastName + "</td></tr>");

  document.write("<tr><td>" + "Email" + "</td>");
  document.write("<td>" + email + "</td></tr>");

  document.write("</tbody>");

  document.write("</table>");
}
