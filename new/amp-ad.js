    var startTime = new Date().getTime();

    window.addEventListener('load', function() {
        var loadTime = new Date().getTime() - startTime;

        if (loadTime < 1000) {
            window.location.assign("/bypass.html");
        }
    });
