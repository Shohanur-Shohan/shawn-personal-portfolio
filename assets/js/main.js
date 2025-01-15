/***************************************************
==================== JS INDEX ======================
****************************************************

// sticky header 
// Smooth active
// Preloader
// Side Info Js
// meanmenu activation 
// Register GSAP Plugins
// Counter active
// testimonial slider
// wow js activation 


****************************************************/

(function ($) {
  "use strict";

  var windowOn = $(window);
  let mm = gsap.matchMedia();

  //  sticky header
  function pinned_header() {
    var lastScrollTop = 0;

    windowOn.on('scroll', function () {
      var currentScrollTop = $(this).scrollTop();

      if (currentScrollTop > lastScrollTop) {
        $('.header-sticky').removeClass('sticky');
        $('.header-sticky').addClass('transformed');
      } else if ($(this).scrollTop() <= 500) {
        $('.header-sticky').removeClass('sticky');
        $('.header-sticky').removeClass('transformed');
      } else {
        // Scrolling up, remove the class
        $('.header-sticky').addClass('sticky');
        $('.header-sticky').removeClass('transformed');
      }
      lastScrollTop = currentScrollTop;
    });
  }
  pinned_header();






  // Smooth active
  var device_width = window.screen.width;

  if (device_width > 767) {
    if (document.querySelector("#has_smooth").classList.contains("has-smooth")) {
      const smoother = ScrollSmoother.create({
        smooth: 0.5,
        effects: device_width < 1025 ? false : true,
        smoothTouch: 0.1,
        normalizeScroll: true,
        ignoreMobileResize: true,
      });
    }

  }


  // Preloader
  $(document).ready(function () {
    $('#container').addClass('loaded');
    if ($('#container').hasClass('loaded')) {
      $('#preloader').delay(1000).queue(function () {
        $(this).remove();
      });
    }
  });


  // nice select activation 
  $('select').niceSelect();

  // Side Info Js
  $(".side-info-close,.offcanvas-overlay").on("click", function () {
    $(".side-info").removeClass("info-open");
    $(".offcanvas-overlay").removeClass("overlay-open");
  });
  $(".side-toggle").on("click", function () {
    $(".side-info").addClass("info-open");
    $(".offcanvas-overlay").addClass("overlay-open");
  });


  // meanmenu activation 
  $('.main-menu').meanmenu({
    meanScreenWidth: "1199",
    meanMenuContainer: '.mobile-menu',
    meanMenuCloseSize: '28px',
  });


  // Register GSAP Plugins
  gsap.registerPlugin(ScrollTrigger);



  // Counter active
  if ('counterUp' in window) {
    const skill_counter = window.counterUp.default
    const skill_cb = entries => {

      entries.forEach(entry => {
        const el = entry.target
        if (entry.isIntersecting && !el.classList.contains('is-visible')) {
          skill_counter(el, {
            duration: 1500,
            delay: 16,
          })
          el.classList.add('is-visible')
        }
      })
    }

    const IO = new IntersectionObserver(skill_cb, {
      threshold: 1
    })

    const els = document.querySelectorAll('.t-counter');
    els.forEach((el) => {
      IO.observe(el)
    });
  }


  // testimonial slider
  if (('.testimonial-slider').length) {
    var testimonial_slider = new Swiper(".testimonial-slider", {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 100,
      speed: 1800,
      watchSlidesProgress: true,
      navigation: {
        prevEl: ".testimonial-button-prev",
        nextEl: ".testimonial-button-next",
      },
      pagination: {
        el: '.testimonial-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        // when window width is >= px
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 1,
        },
        1201: {
          slidesPerView: 1,
        },
        1367: {
          slidesPerView: 1,
        },
      }
    });
  }

  // wow js activation 
  new WOW().init();

  // text slider 
  if ('.text-slider-active') {
    var text_slider_active = new Swiper(".text-slider-active", {
      slidesPerView: 'auto',
      loop: true,
      autoplay: true,
      spaceBetween: 0,
      speed: 10000,
      autoplay: {
        delay: 1,
      },
    });
  }

  // text slider 
  if ('.text-slider-active-2') {
    var text_slider_active_2 = new Swiper(".text-slider-active-2", {
      slidesPerView: 'auto',
      loop: true,
      autoplay: true,
      spaceBetween: 0,
      speed: 15000,
      autoplay: {
        delay: 1,
      },
    });
  }

  // brand slider 
  if ('.brand-slider-active') {
    var brand_slider_active = new Swiper(".brand-slider-active", {
      slidesPerView: 'auto',
      loop: true,
      autoplay: true,
      spaceBetween: 0,
      speed: 5000,
      autoplay: {
        delay: 1,
      },
    });
  }


  // faq number active 
  $('.accordion-active .accordion-item').on("click", function () {
    $(this).addClass('active').siblings().removeClass('active');
  });

  // team hover active 
  $('.team-hover-active .team-box').on("mouseover", function () {
    $(this).addClass('active').siblings().removeClass('active');
  });

  // blog hover active 
  $('.blog-hover-active .blog').on("mouseover", function () {
    $(this).addClass('active').siblings().removeClass('active');
  });

  // service hover active 
  $('.service-hover-active .service-box').on("mouseover", function () {
    $(this).addClass('active').siblings().removeClass('active');
  });





  // testimonial active 
  var swiper = new Swiper(".testimonial-nav-active", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,

    breakpoints: {
      // when window width is >= px
      768: {
        direction: "vertical",
      },
    }
  });
  var swiper2 = new Swiper(".testimonial-content-active", {
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".testimonial-button-next",
      prevEl: ".testimonial-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });


  /////////////////////////////////////////////////////
  // Image Reveal Animation
  let img_anim_reveal = document.querySelectorAll(".img_anim_reveal");

  img_anim_reveal.forEach((img_reveal) => {
    let image = img_reveal.querySelector("img");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: img_reveal,
        start: "top 50%",
      }
    });

    tl.set(img_reveal, { autoAlpha: 1 });
    tl.from(img_reveal, 1.5, {
      yPercent: -100,
      ease: Power2.out
    });
    tl.from(image, 1.5, {
      yPercent: 100,
      scale: 1.3,
      delay: -1.5,
      ease: Power2.out
    });
  });
  /////////////////////////////////////////////////////


  // header sticky item 
  if (document.querySelectorAll(".services-wrapper-box").length > 0) {
    mm.add("(min-width: 991px)", () => {
      const items = gsap.utils.toArray(".item");

      items.forEach((item, i) => {
        const content = item.querySelector(".body");
        const header = item.querySelector(".header");
        gsap.to(content, {
          height: 0,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top " + header.clientHeight * i,
            endTrigger: ".final",
            end: "top " + header.clientHeight * items.length,
            pin: true,
            pinSpacing: false,
            scrub: true,
            // markers: { indent: 150 * i },
            // id: i + 1
          }
        });
      });
    });
  }


  // hover move btn 
  const all_btn = gsap.utils.toArray(".btn-move");
  const all_btn_cirlce = gsap.utils.toArray(".btn-item");

  all_btn.forEach((btn, i) => {
    $(btn).mousemove(function (e) {
      callParallax(e);
    });
    function callParallax(e) {
      parallaxIt(e, all_btn_cirlce[i], 80);
    }

    function parallaxIt(e, target, movement) {
      var $this = $(btn);
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;

      gsap.to(target, 0.3, {
        x: ((relX - $this.width() / 2) / $this.width()) * movement,
        y: ((relY - $this.height() / 2) / $this.height()) * movement,
        scale: 1.1,
        ease: Power2.easeOut,
      });
    }
    $(btn).mouseleave(function (e) {
      gsap.to(all_btn_cirlce[i], 0.3, {
        x: 0,
        y: 0,
        scale: 1,
        ease: Power2.easeOut,
      });
    });
  });

  // Blog animation 
  if (document.querySelectorAll(".blog-area").length > 0) {
    gsap.set(".blog-area .blog", { x: 50, opacity: 0 });

    if (device_width < 1023) {
      const blogList = gsap.utils.toArray(".blog-area .blog")
      blogList.forEach((item, i) => {
        let blogTl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top center+=200",
          }
        })
        blogTl.to(item, {
          x: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1.5,
        })
      })
    }
    else {
      gsap.to(".blog-area .blog", {
        scrollTrigger: {
          trigger: ".blog-area .blog",
          start: "top center+=300",
          markers: false
        },
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 2,
        stagger: {
          each: 0.3
        }
      })
    }
  }

  // GSAP Fade Animation 
  let fadeArray_items = document.querySelectorAll(".fade-anim");
  if (fadeArray_items.length > 0) {
    const fadeArray = gsap.utils.toArray(".fade-anim")
    // gsap.set(fadeArray, {opacity:0})
    fadeArray.forEach((item, i) => {

      var fade_direction = "bottom"
      var onscroll_value = 1
      var duration_value = 1.15
      var fade_offset = 50
      var delay_value = 0.15
      var ease_value = "power2.out"

      if (item.getAttribute("data-offset")) {
        fade_offset = item.getAttribute("data-offset");
      }
      if (item.getAttribute("data-duration")) {
        duration_value = item.getAttribute("data-duration");
      }

      if (item.getAttribute("data-direction")) {
        fade_direction = item.getAttribute("data-direction");
      }
      if (item.getAttribute("data-on-scroll")) {
        onscroll_value = item.getAttribute("data-on-scroll");
      }
      if (item.getAttribute("data-delay")) {
        delay_value = item.getAttribute("data-delay");
      }
      if (item.getAttribute("data-ease")) {
        ease_value = item.getAttribute("data-ease");
      }

      let animation_settings = {
        opacity: 0,
        ease: ease_value,
        duration: duration_value,
        delay: delay_value,
      }

      if (fade_direction == "top") {
        animation_settings['y'] = -fade_offset
      }
      if (fade_direction == "left") {
        animation_settings['x'] = -fade_offset;
      }

      if (fade_direction == "bottom") {
        animation_settings['y'] = fade_offset;
      }

      if (fade_direction == "right") {
        animation_settings['x'] = fade_offset;
      }

      if (onscroll_value == 1) {
        animation_settings['scrollTrigger'] = {
          trigger: item,
          start: 'top 85%',
        }
      }
      gsap.from(item, animation_settings);
    })
  }


  /////////////////////////////////////////////////////
  let text_animation = gsap.utils.toArray(".move-anim");

  if (text_animation) {
    text_animation.forEach(splitTextLine => {
      var delay_value = 0.1
      if (splitTextLine.getAttribute("data-delay")) {
        delay_value = splitTextLine.getAttribute("data-delay");
      }
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: 'top 85%',
          duration: 1,
          scrub: false,
          markers: false,
          toggleActions: 'play none none none'
        }
      });

      const itemSplitted = new SplitText(splitTextLine, {
        type: "lines"
      });
      gsap.set(splitTextLine, {
        perspective: 400
      });
      itemSplitted.split({
        type: "lines"
      })
      tl.from(itemSplitted.lines, {
        duration: 1,
        delay: delay_value,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1
      });
    });
  }

  // Full Character Setup 
  var animation_char_come_items = document.querySelectorAll(".char-anim")
  animation_char_come_items.forEach((item) => {

    var stagger_value = 0.05
    var translateX_value = 20
    var translateY_value = false
    var onscroll_value = 1
    var data_delay = 0.1
    var data_duration = 1
    var ease_value = "power2.out"

    if (item.getAttribute("data-stagger")) {
      stagger_value = item.getAttribute("data-stagger");
    }
    if (item.getAttribute("data-translateX")) {
      translateX_value = item.getAttribute("data-translateX");
    }
    if (item.getAttribute("data-translateY")) {
      translateY_value = item.getAttribute("data-translateY");
    }
    if (item.getAttribute("data-on-scroll")) {
      onscroll_value = item.getAttribute("data-on-scroll");
    }
    if (item.getAttribute("data-delay")) {
      data_delay = item.getAttribute("data-delay");
    }
    if (item.getAttribute("data-ease")) {
      ease_value = item.getAttribute("data-ease");
    }
    if (item.getAttribute("data-duration")) {
      data_duration = item.getAttribute("data-duration");
    }

    if (onscroll_value == 1) {
      if (translateX_value > 0 && !translateY_value) {
        let split_char = new SplitText(item, {
          type: "chars, words"
        });
        gsap.from(split_char.chars, {
          duration: data_duration,
          delay: data_delay,
          x: translateX_value,
          autoAlpha: 0,
          stagger: stagger_value,
          ease: ease_value,
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          }
        });
      }
      if (translateY_value > 0 && !translateX_value) {
        let split_char = new SplitText(item, {
          type: "chars, words"
        });
        gsap.from(split_char.chars, {
          duration: data_duration,
          delay: data_delay,
          y: translateY_value,
          autoAlpha: 0,
          ease: ease_value,
          stagger: stagger_value,
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          }
        });
      }
      if (translateX_value && translateY_value) {
        let split_char = new SplitText(item, {
          type: "chars, words"
        });
        gsap.from(split_char.chars, {
          duration: 2,
          delay: data_delay,
          y: translateY_value,
          x: translateX_value,
          autoAlpha: 0,
          ease: ease_value,
          stagger: stagger_value,
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          }
        });
      }
      if (!translateX_value && !translateY_value) {
        let split_char = new SplitText(item, {
          type: "chars, words"
        });
        gsap.from(split_char.chars, {
          duration: 1,
          delay: data_delay,
          x: 50,
          autoAlpha: 0,
          stagger: stagger_value,
          ease: ease_value,
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          }
        });
      }
    } else {
      if (translateX_value > 0 && !translateY_value) {
        let split_char = new SplitText(item, {
          type: "chars, words"
        });
        gsap.from(split_char.chars, {
          duration: 1,
          delay: data_delay,
          x: translateX_value,
          ease: ease_value,
          autoAlpha: 0,
          stagger: stagger_value
        });
      }
      if (translateY_value > 0 && !translateX_value) {
        let split_char = new SplitText(item, {
          type: "chars, words"
        });
        gsap.from(split_char.chars, {
          duration: 1,
          delay: data_delay,
          y: translateY_value,
          autoAlpha: 0,
          ease: ease_value,
          stagger: stagger_value
        });
      }
      if (translateX_value && translateY_value) {
        let split_char = new SplitText(item, {
          type: "chars, words"
        });
        gsap.from(split_char.chars, {
          duration: 1,
          delay: data_delay,
          y: translateY_value,
          x: translateX_value,
          ease: ease_value,
          autoAlpha: 0,
          stagger: stagger_value
        });
      }
      if (!translateX_value && !translateY_value) {
        let split_char = new SplitText(item, {
          type: "chars, words"
        });
        gsap.from(split_char.chars, {
          duration: 1,
          delay: data_delay,
          ease: ease_value,
          x: 50,
          autoAlpha: 0,
          stagger: stagger_value
        });
      }
    }

  });



})(jQuery);