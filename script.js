window.onload = function () {
  // Đặt mã JavaScript của bạn ở đây
  $(".row input").val("");

  $(".input-effect input").focusout(function () {
    if ($(this).val() != "") {
      $(this).addClass("has-content");
    } else {
      $(this).removeClass("has-content");
    }
  });
};

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("myForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://script.google.com/macros/s/AKfycbyPaiI8-BOLWmOoaJuOpOP3L8RBsAuh2oxWyU78qu_iua26DkXksTnkgLosSFMC2zEjOA/exec"
    );
    xhr.onload = function () {
      if (xhr.status === 200) {
        var response = xhr.responseText;
        if (response === "1") {
          var sectionsToHide = document.querySelectorAll(
            ".section-2, .section-3, .section-4, .section-5, .section-6, .section-7, .section-submit"
          );
          sectionsToHide.forEach(function (section) {
            section.style.display = "none";
          });
          var sectionToDisplay = document.querySelector(".section-8");
          sectionToDisplay.style.display = "block";
        } else {
          alert("thất bại, vui lòng thử lại sau.");
        }
      } else {
        alert("Lỗi máy chủ.");
      }
    };
    xhr.send(formData);
  });
});
