$(document).ready(function () {
  // prelaoder
  //Maruf al Bashir Reza
  $(window).on("load", function () {
    // makes sure the whole site is loaded
    $("#status").fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(2000).fadeOut("slow"); // will fade out the white DIV that covers the website.
    $("body").delay(1000).css({ overflow: "visible" });
  });
  // prelaoder

  //  testimonial slider
  $(".categories_highlights_slider").slick({
    infinite: true,
    speed: 300,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  //  testimonial slider

  // cart sidebar section
  var replaceBtn = document.querySelector(".apply");
  var replaceDom = document.querySelector(".promoCodeFeild");
  var promoApply = document.querySelector(".promo_apply");
  var couponText = document.querySelector(".couponText");
  var discount = document.querySelector(".discount");

  $(replaceBtn).click(function () {
    $(replaceBtn).addClass("d-none");
    $(replaceDom).removeClass("d-none");
  });

  $(promoApply).click(function () {
    $(discount).removeClass("d-none");
  });

  // cart sidebar section

  $(".cta-edit").click(function () {
    $(".shipping_address").addClass("d-none");
    $(".edit_shipping_address").removeClass("d-none");
  });

  $(".save-btn").click(function () {
    $(".edit_shipping_address").addClass("d-none");
    $(".shipping_address").removeClass("d-none");
  });

  $(".cancel-btn").click(function () {
    $(".edit_shipping_address").addClass("d-none");
    $(".shipping_address").removeClass("d-none");
  });

  // add card

  $(".add_card").click(function () {
    $(".edit_card_new").removeClass("d-none");
    $(".payment-address").addClass("d-none");
  });

  $(".card-cancel-btn").click(function () {
    $(".edit_card_new").addClass("d-none");
    $(".payment-address").removeClass("d-none");
  });
  $(".card-save-btn").click(function () {
    $(".edit_card_new").addClass("d-none");
    $(".payment-address").removeClass("d-none");
  });

  $(".edtProfile").click(function () {
    $(".viewFeild").addClass("d-none");
    $(".editFeild").removeClass("d-none");
  });
  $(".profSave").click(function () {
    $(".viewFeild").removeClass("d-none");
    $(".editFeild").addClass("d-none");
  });
  $(".profEdit").click(function () {
    $(".viewFeild").removeClass("d-none");
    $(".editFeild").addClass("d-none");
  });

  $(".add-new-method").click(function () {
    $(".card-method").addClass("d-none");
    $(".card-method").removeClass("d-block");
    $(".payment-address").addClass("d-block");
    $(".payment-address").removeClass("d-none");
  });

  $(".add_card").click(function () {
    $(".edit_card_new").removeClass("d-none");
    $(".edit_card_new").addClass("d-block");
    $(".payment-address").addClass("d-none");
    $(".payment-address").removeClass("d-block");
  });

  $(".payment-method-cancel").click(function () {
    $(".card-method").removeClass("d-none");
    $(".card-method").addClass("d-block");
    $(".payment-address").removeClass("d-block");
    $(".payment-address").addClass("d-none");
    $(".edit_card_new").removeClass("d-block");
    $(".edit_card_new").addClass("d-none");
  });

  $(".order_item").click(function () {
    $(".track_my_order_with_number").removeClass("d-block");
    $(".track_my_order_with_number").addClass("d-none");
    $(".order_item_details").addClass("d-block");
    $(".order_item_details").removeClass("d-none");
  });

  $(".give_review").click(function () {
    $(".wishlist_item").addClass("d-none");
    $(".track_my_order").removeClass("d-none");
  });
  $(".review_product_btn_cancel").click(function () {
    $(".wishlist_item").removeClass("d-none");
    $(".track_my_order").addClass("d-none");
  });
  $(".review_product_btn_save").click(function () {
    $(".wishlist_item").removeClass("d-none");
    $(".track_my_order").addClass("d-none");
  });

  // dropdown toggle btn

  $(".dropbtn").on("click", function () {
    $(this).toggleClass("show");
  });

  // texture item selector
  $(".product-texture-item").click(function () {
    $(this).toggleClass("active");
  });

  const stars = document.querySelectorAll(".stars i");
  const starsNone = document.querySelector(".rating-box");

  // ---- ---- Stars ---- ---- //
  stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
      stars.forEach((star, index2) => {
        // ---- ---- Active Star ---- ---- //
        index1 >= index2
          ? star.classList.add("active")
          : star.classList.remove("active");
      });
    });
  });

  $(".ph-heart").on("click", function () {
    $(this).toggleClass("ph-heart-fill");
  });
  // product heart

  // product hero slider
  $(".product_hero_slider_for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".product_hero_slider_nav"
  });
  $(".product_hero_slider_nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    asNavFor: ".product_hero_slider_for",
    arrows: false,
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          vertical: false
        }
      }
    ]
  });
  // product hero slider

  // all product filter button select
  // let selectBtn = document.querySelector(".all-product-name li");

  $(".all-product-name li").on("click", function () {
    $(this).toggleClass("active");
  });
  // all product filter button select

  // sticky nav
  var btn = $("#top_navbar");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 10) {
      btn.addClass("sticky");
    } else {
      btn.removeClass("sticky");
    }
  });
  // sticky nav
});

// toggle date
function myDateShow() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

// js password show
function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

// increase & decrease btn
$(function () {
  $("[data-decrease]").click(decrease);
  $("[data-increase]").click(increase);
  $("[data-value]").change(valueChange);
});

function decrease() {
  var value = $(this).parent().find("[data-value]").val();
  if (value > 1) {
    value--;
    $(this).parent().find("[data-value]").val(value);
  }
}

function increase() {
  var value = $(this).parent().find("[data-value]").val();
  if (value < 100) {
    value++;
    $(this).parent().find("[data-value]").val(value);
  }
}

function valueChange() {
  var value = $(this).val();
  if (value == undefined || isNaN(value) == true || value <= 0) {
    $(this).val(1);
  } else if (value >= 101) {
    $(this).val(100);
  }
}

// scroll to top

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Window History Back
function goBack() {
  window.history.back();
}


