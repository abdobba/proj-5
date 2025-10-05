export function slider1(){
    var swiper = new Swiper(".mySwiper", {
         loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
    });
}

slider1();


       export function initTeamSwiper() {
            const swiper = new Swiper('.teamSwiper', {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }
            });
        }

        // تشغيل الفنكشن عند تحميل الصفحة
        initTeamSwiper();


 export function setupSlider() {
    var swiper = new Swiper(".mySwiper-2", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

 
    setupSlider();




 export function initClientsSwiper() {
    const swiper = new Swiper('.clientsSwiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            // Mobile (1 slide)
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // Tablet (3 slides)
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // Desktop (5 slides)
            1024: {
                slidesPerView: 5,
                spaceBetween: 20
            }
        }
    });
}

// استدعاء الفانكشن بعد تحميل الصفحة

// تشغيل الفنكشن عند تحميل الصفحة
initClientsSwiper();
  