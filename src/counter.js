


function initCounters(counter1Id, counter2Id, counter3Id, counter4Id, counter5Id, counter1Target, counter2Target, counter3Target, counter4Target, counter5Target, duration = 5500) {
    
    // Function to animate counter
    function animateCounter(counter, endValue, isPercentage = false) {
        let startTime = null;
        
        function animate(currentTime) {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const currentCount = Math.floor(progress * endValue);
            
            if (isPercentage) {
                counter.textContent = currentCount + "%";
            } else {
                counter.textContent = currentCount + "+";
            }
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    // Get all counters
    let counter1 = document.getElementById(counter1Id);
    let counter2 = document.getElementById(counter2Id);
    let counter3 = document.getElementById(counter3Id);
    let counter4 = document.getElementById(counter4Id);
    let counter5 = document.getElementById(counter5Id);
    
    // Intersection Observer
    let options = {
        root: null,
        threshold: 0.5
    };
    
    let hasAnimated = false;
    
    let observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                
                // Start animations for all counters
                if (counter1) animateCounter(counter1, counter1Target, false);
                if (counter2) animateCounter(counter2, counter2Target, true);
                if (counter3) animateCounter(counter3, counter3Target, false);
                if (counter4) animateCounter(counter4, counter4Target, false);
                if (counter5) animateCounter(counter5, counter5Target, false);
                
                // Fade in
                if (counter1) counter1.style.opacity = 1;
                if (counter2) counter2.style.opacity = 1;
                if (counter3) counter3.style.opacity = 1;
                if (counter4) counter4.style.opacity = 1;
                if (counter5) counter5.style.opacity = 1;
                
                observer.disconnect();
            }
        });
    }, options);
    
    // Observe all counters
    if (counter1) observer.observe(counter1);
    if (counter2) observer.observe(counter2);
    if (counter3) observer.observe(counter3);
    if (counter4) observer.observe(counter4);
    if (counter5) observer.observe(counter5);
}

// استخدام الفنكشن مع counter5
initCounters("counter1", "counter2", "counter3", "counter4", "counter5", 5000, 100, 240, 23, 24);



document.addEventListener("DOMContentLoaded", function() {
    initCounters("counter1", "counter2", "counter3", "counter4", "counter5", 5000, 100, 240, 23, 24);
});
 