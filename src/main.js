import "ldrs/ring";
import "remixicon/fonts/remixicon.css";
import { toggleMobileMenu } from "./mobile-menue";
import "./gsap.js";
import { imgRotate } from "./gsap.js";
import { imgRotate2 } from "./gsap.js";
import "./dark-light-mode.js";
import {switchMode } from "./dark-light-mode.js";

// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import './loader.js';
import "./swiper.js";
import { slider1 } from "./swiper.js";
import {initTeamSwiper} from "./swiper.js";
import {setupSlider } from  "./swiper.js";

import {initClientsSwiper} from "./swiper.js";
import 'aos/dist/aos.css';
import AOS from 'aos';
AOS.init();





// تحميل الهيدر

window.addEventListener("DOMContentLoaded", async () => {
  try {
    // تحميل الهيدر باستخدام async/await
    const headerResponse = await fetch("components/header.html");
    const headerData = await headerResponse.text();
    document.getElementById("header").innerHTML = headerData;

    // تحميل الفوتر باستخدام async/await
    const footerResponse = await fetch("components/footer.html");
    const footerData = await footerResponse.text();
    document.getElementById("footer").innerHTML = footerData;

    // بعد تحميل الهيدر والفوتر، قم بتفعيل قائمة الموبايل
    toggleMobileMenu();
    
    // تفعيل تحريكات GSAP

    
    imgRotate();

    imgRotate2();
        
    // تفعيل وضع التبديل بين الداكن والفاتح
switchMode();
// initDarkMode();
    
    
    
}
  
catch (error) {
    console.error("Error loading components:", error);
}


});
slider1();

initTeamSwiper();

setupSlider();

initClientsSwiper();


// ============================================
// Video Popup Functionality
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    
    const modal = document.getElementById('videoModal');
    const videoIframe = document.getElementById('videoIframe');
    
    if (!modal || !videoIframe) return;
    
    // Open video popup
    document.querySelectorAll('.video-popup').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const videoUrl = this.getAttribute('href');
            const videoId = videoUrl.split('v=')[1];
            const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            
            videoIframe.src = embedUrl;
            modal.classList.remove('hidden');
            modal.classList.add('flex', 'items-center', 'justify-center');
        });
    });


    window.closeVideo = function() {
        modal.classList.add('hidden');
        modal.classList.remove('flex', 'items-center', 'justify-center');
        videoIframe.src = '';
    }


    modal.addEventListener('click', function(i) {
        if (i.target === this) {
            closeVideo();
        }
    });


    document.addEventListener('keydown', function(i) {
        if (i.key === 'Escape') {
            closeVideo();
        }
    });
    
});

