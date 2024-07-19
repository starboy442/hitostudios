window.onload = () => {
  const loader_container = document.getElementById("loader-container");
  const masonryContainer = document.getElementById("masonary-container");
  loader_container.style.opacity = 0;
  loader_container.style.zIndex = -1;
  document.body.style.overflowY = "visible";
  imagesLoaded(masonryContainer, function () {
    var masonry = new Masonry(masonryContainer, {
      itemSelector: ".masonry-item",
      percentPosition: true,
    });
  });
};

// Slider
var flag = false,
  duration = 500;
$(".slider").owlCarousel({
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  margin: 0,
  padding: 0,
  loop: true,
  autoplay: 8000,
  autoplayTimeout: 8000,
  nav: true,
  dots: true,
  navText: [
    "<i class='fa-solid fa-chevron-left' style='font-size:28px; color:#ffffff; cursor:pointer !important;'></i>",
    "<i class='fa-solid fa-chevron-right ' style='font-size:28px; color:#ffffff; cursor:pointer !important;'></i>",
  ],
  items: 3,
  smartSpeed: 700,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    800: {
      items: 1,
    },
    1024: {
      items: 1,
    },
  },
});

$(".slider-testimonial")
  .owlCarousel({
    loop: true,
    animateOut: "fadeOutRight",
    animateIn: "fadeInLeft",
    items: 1,
    margin: 0,
    nav: false,
    navText: [
      "<i class='fa-solid fa-chevron-left' style='font-size:28px; color:#E60000;'></i>",
      "<i class='fa-solid fa-chevron-right ' style='font-size:28px; color:#E60000;'></i>",
    ],
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
  })
  .on("changed.owl.carousel", function (e) {
    if (!flag) {
      flag = false;
      $(".slider-thumb-testimonial").trigger("to.owl.carousel", [
        e.item.index,
        duration,
        true,
      ]);
      flag = false;
    }
  });

$(".slider-thumb-testimonial")
  .owlCarousel({
    loop: true,
    items: 3,
    margin: 0,
    nav: true,
    center: true,
    navText: [
      "<i class='fa-solid fa-chevron-left icon' style='font-size:28px; color:#E60000;'></i>",
      "<i class='fa-solid fa-chevron-right icon' style='font-size:28px; color:#E60000;'></i>",
    ],
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 3,
      },
      768: {
        items: 3,
      },
      1024: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  })
  .on("click", ".owl-item", function () {
    $(".slider-testimonial").trigger("to.owl.carousel", [
      $(this).index(),
      duration,
      true,
    ]);
  })
  .on("changed.owl.carousel", function (e) {
    if (!flag) {
      flag = true;
      $(".slider-testimonial").trigger("to.owl.carousel", [
        e.item.index,
        duration,
        true,
      ]);
      flag = false;
    }
  });

// Mobile Navbar
const show_nav_btn = document.getElementById("show-menu-btn");
const hide_menu_btn = document.getElementById("hide-menu-btn");
const mobile_nav_container = document.getElementById("mobile-nav-container");

show_nav_btn.addEventListener("click", () => {
  mobile_nav_container.classList.add("show-nav-container");
  hide_menu_btn.classList.add("animate-hide-button");
});

hide_menu_btn.addEventListener("click", () => {
  mobile_nav_container.classList.remove("show-nav-container");
  hide_menu_btn.classList.remove("animate-hide-button");
});

// Sticky Navbar
const sticky_container = document.getElementById("sticky-nav-container");
const header = document.getElementById("header");
window.addEventListener("scroll", function () {
  if (window.scrollY > header.offsetHeight) {
    sticky_container.style.visibility = "visible";
    sticky_container.classList.add("animate__slideInDown");
  } else {
    sticky_container.style.visibility = "hidden";
    sticky_container.classList.remove("animate__slideInDown");
  }
});

// Active Links
const items = document.querySelectorAll(".navigation ul li");
let active_links = [];
items.forEach((li) => {
  li.addEventListener("click", () => {
    items.forEach((item) => {
      if (li.children[0].innerHTML === item.children[0].innerHTML) {
        active_links.push(item);
      } else {
        item.classList.remove("active");
      }
    });
    active_links.forEach((link) => {
      link.classList.add("active");
    });
    console.log(active_links);
    active_links = [];
  });
});

// Animated Slider Button
function animate_on_mouseover(element) {
  element.classList.add("show_animated_btn");
  element.classList.remove("hide_animated_btn");
}

function animate_on_mouseout(element) {
  element.classList.toggle("show_animated_btn");
  element.classList.toggle("hide_animated_btn");
}

// Animate Lines
var isInView = $(".mark, .section-mark").inView("both");
function checkVisability() {
  $(".mark, .section-mark").each(function () {
    if ($(this).inView("both")) {
      $(this).addClass("animate");
    } else {
      $(this).removeClass("animate");
    }
  });
}

// Gallery / LightBox
$('[data-fancybox="gallery"]').fancybox({
  infobar: false,
  arrows: false,
  buttons: ["fullScreen", "share", "close"],
  afterLoad: function (instance, current) {
    // Customize the content of the share modal
    current.$content
      .find(".fancybox-share")
      .append("<p>Your custom content goes here.</p>");
  },
});

$('[data-fancybox="gallery-2"]').fancybox({
  buttons: ["slideShow", "fullScreen", "thumbs", "share", "close"],
});

$(".fancybox-share p").empty();

// Window Events
$(window).scroll(function () {
  checkVisability();
  if (
    document.documentElement.scrollTop > 120 ||
    document.body.scrollTop > 120
  ) {
    document.documentElement.style.setProperty(
      "--scrollbar-thumb-color",
      "#e60000"
    );
  } else {
    document.documentElement.style.setProperty(
      "--scrollbar-thumb-color",
      "#232b2b"
    );
  }
});

if (document.body.scrollTop === 0) {
  document.documentElement.style.setProperty(
    "--scrollbar-thumb-color",
    "#232b2b"
  );
}
