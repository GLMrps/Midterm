$(document).ready(function () {


    
    var windowWidth = window.innerWidth;
    var documentHeight = updatePageHeight();
    function updatePageHeight() {
        let pageHeight = Math.max(
          document.documentElement.scrollHeight,
          document.body.scrollHeight
        );
        pageHeight = pageHeight - 300;
        return pageHeight;
      }
    $(".change-block").addClass("block-light");

    if ($(window).width() < 600) {
        
        $("#bar-intro").attr("src", "img/bar-intro-2.png");
        $("#bar-intro-another").attr("src", "../img/bar-intro-2.png");
        $("#bar1").attr("src", "img/bar1-2.png");
        $("#bar2").attr("src", "img/bar2-2.png");
        $("#bar1-another").attr("src", "../img/bar1-2.png");
        $("#bar2-another").attr("src", "../img/bar2-2.png");
        $(".function-icon-nav2").removeClass("invisible");
        $("#h-menu").removeClass("invisible");
        $(".debug-cover").removeClass("invisible");
        $(".page-name").removeClass("invisible");
        $(".desk-cover-img").addClass("invisible");
    }
    if ($(window).width() > 600) {
        $("#bar-intro").attr("src", "img/bar-intro.png");
        $("#bar-intro-another").attr("src", "../img/bar-intro.png");
        $("#bar1").attr("src", "img/img-bar1.png");
        $("#bar2").attr("src", "img/img-bar2.png");
        $("#bar1-another").attr("src", "../img/img-bar1.png");
        $("#bar2-another").attr("src", "../img/img-bar2.png");
        $(".function-icon-nav2").addClass("invisible");
        $("#h-menu").addClass("invisible");
        $(".debug-cover").addClass("invisible");
        $(".page-name").addClass("invisible");
        $(".desk-cover-img").removeClass("invisible");
    }
    $(window).resize(function () {
        windowWidth = window.innerWidth;
        documentHeight = updatePageHeight();
        stars.forEach(setStarInitXPosition);
        stars.forEach(setStarInitYPosition);
        if ($(window).width() < 600) {
            $("#bar-intro").attr("src", "img/bar-intro-2.png");
            $("#bar-intro-another").attr("src", "../img/bar-intro-2.png");
            $("#bar1").attr("src", "img/bar1-2.png");
            $("#bar2").attr("src", "img/bar2-2.png");
            $("#bar1-another").attr("src", "../img/bar1-2.png");
            $("#bar2-another").attr("src", "../img/bar2-2.png");
            $(".function-icon-nav2").removeClass("invisible");
            $("#h-menu").removeClass("invisible");
            $(".debug-cover").removeClass("invisible");
            $(".page-name").removeClass("invisible");
            $(".desk-cover-img").addClass("invisible");
        }
        if ($(window).width() > 600) {
            $("#bar-intro").attr("src", "img/bar-intro.png");
            $("#bar-intro-another").attr("src", "../img/bar-intro.png");
            $("#bar1").attr("src", "img/img-bar1.png");
            $("#bar2").attr("src", "img/img-bar2.png");
            $("#bar1-another").attr("src", "../img/img-bar1.png");
            $("#bar2-another").attr("src", "../img/img-bar2.png");
            $(".function-icon-nav2").addClass("invisible");
            $("#h-menu").addClass("invisible");
            $(".debug-cover").addClass("invisible");
            $(".page-name").addClass("invisible");
            $(".desk-cover-img").removeClass("invisible");
        }
    });

    $(".toggle").click(function () {
        $(".debug-cover").toggleClass("show");
    })


    var block = document.getElementsByClassName('change-block');
    var isGradient1 = false; // 初始漸層色為第一種
    document.getElementById('Toggle').addEventListener('click', function () {
        // 切換漸層色
        isGradient1 = !isGradient1;
        // 設置body的背景為新的漸層色
        /*fa-star fa-circle*/
        document.body.style.background = isGradient1 ? 'linear-gradient(to bottom, #000000, #461AC4)' : 'linear-gradient(to bottom, #8E92FF, #C3EDFB)';
        if (isGradient1) {
            $(".change-text").addClass("text-white");
            $(".change-block").removeClass("block-light");
            $(".change-block").addClass("block-black");
            $(".change-top").removeClass("color1");
            $(".change-top").addClass("color2");
            $(".star i").removeClass("fa-circle");
            $(".star i").addClass("fa-star");
            document.querySelector(".sun-logo2").classList.toggle("animate-sun2");
            document.querySelector(".moon-logo2").classList.toggle("animate-moon2");
        }
        else {
            $(".change-text").removeClass("text-white");
            $(".change-block").removeClass("block-black");
            $(".change-block").addClass("block-light");
            $(".change-top").removeClass("color2");
            $(".change-top").addClass("color1");
            $(".star i").removeClass("fa-star");
            $(".star i").addClass("fa-circle");
            document.querySelector(".sun-logo2").classList.toggle("animate-sun2");
            document.querySelector(".moon-logo2").classList.toggle("animate-moon2");
        }
    });

    document.getElementById('Toggle2').addEventListener('click', function () {
        // 切換漸層色
        isGradient1 = !isGradient1;
        // 設置body的背景為新的漸層色
        /*fa-star fa-circle*/
        document.body.style.background = isGradient1 ? 'linear-gradient(to bottom, #000000, #461AC4)' : 'linear-gradient(to bottom, #8E92FF, #C3EDFB)';
        if (isGradient1) {
            $(".change-text").addClass("text-white");
            $(".change-block").removeClass("block-light");
            $(".change-block").addClass("block-black");
            $(".change-top").removeClass("color1");
            $(".change-top").addClass("color2");
            $(".star i").removeClass("fa-circle");
            $(".star i").addClass("fa-star");
            document.querySelector(".sun-logo").classList.toggle("animate-sun");
            document.querySelector(".moon-logo").classList.toggle("animate-moon");
        }
        else {
            $(".change-text").removeClass("text-white");
            $(".change-block").removeClass("block-black");
            $(".change-block").addClass("block-light");
            $(".change-top").removeClass("color2");
            $(".change-top").addClass("color1");
            $(".star i").removeClass("fa-star");
            $(".star i").addClass("fa-circle");
            document.querySelector(".sun-logo").classList.toggle("animate-sun");
            document.querySelector(".moon-logo").classList.toggle("animate-moon");
        }
    });
    document.getElementById("Toggle").addEventListener("click", () => {
        document.querySelector(".sun-logo").classList.toggle("animate-sun");
        document.querySelector(".moon-logo").classList.toggle("animate-moon");
    })
    document.getElementById("Toggle2").addEventListener("click", () => {
        document.querySelector(".sun-logo2").classList.toggle("animate-sun2");
        document.querySelector(".moon-logo2").classList.toggle("animate-moon2");
    })



    /*滾動視差*/
    const stars = document.querySelectorAll('.star');


    const setStarInitXPosition = (star) => {
        const START_WIDTH = 24;
        const starLeftPosition = (Math.random() * windowWidth - START_WIDTH) * 0.95;
        star.style.left = `${starLeftPosition}px`;
    };
    const setStarInitYPosition = (star) => {
        const START_Height = 24;
        const starTopPosition = (Math.random() * documentHeight - START_Height) * 0.95;
        star.style.top = `${starTopPosition}px`;
    };

    stars.forEach(setStarInitXPosition);
    stars.forEach(setStarInitYPosition);

    const setStarMoveSpeed = (star) => {
        const starMoveSpeed = 0 - Math.random();
        star.dataset.speed = starMoveSpeed;
    };

    stars.forEach(setStarMoveSpeed);


    window.addEventListener('scroll', () => {
        const scrollPositionY = window.pageYOffset;
    });

    window.addEventListener('scroll', () => {
        const scrollPositionY = window.pageYOffset;
        const moon = document.querySelector('.moon');
        const stars = document.querySelectorAll('.star');
        const parallaxScrollingElements = [moon, ...stars];

        parallaxScrollingElements.forEach((element) => {
            const elementMoveSpeed = Number(element.dataset.speed);
            element.style.transform = `
      translateY(${scrollPositionY * elementMoveSpeed + 400}px)
    `;
        });
    });

    gsap.registerPlugin(Flip);
    const header = $(".header");
    let lastClickImage = null;
    $(".gallery__item").click(function (e) {
        showImage(e)
        changetext(e)
    });
    $(".header").click(function (e) {
        backImage(e);
    });

    const changetext = function (e) {
        if ($(e.target).hasClass("filp-img1")){
            setTimeout(function(){ 
               $(".introducing-text").html(`                    
               練習作品--<ひかりふる><br>
               2023/6 <br>
               Corel Painter/Photoshop <br>
               接觸電繪後的第二件作品，練習重點是氛圍展現以及後製修圖法，因此整體而言，實驗性質居多。<br>
               主要想呈現出強光灑落以及聖潔感，但容易淪落為曝光過度，需要改進的地方還有很多。
               `);
            }, 500);
        }else if ($(e.target).hasClass("filp-img2")){
            setTimeout(function(){ 
               $(".introducing-text").html(`
               練習作品--< Hime > <br>
               2023/2 <br>
               Corel Painter/Photoshop <br>
               與<Hina>同一時期繪製，接觸電繪後的第一件作品，練習重點為軟體操作/熟悉，以及繪圖的風格嘗試，同時盡可能熟悉繪圖版的手感，也藉由這次機會練習不擅長的人臉角度。
               `);
            }, 500);
        }else if ($(e.target).hasClass("filp-img3")){
            setTimeout(function(){ 
               $(".introducing-text").html(`
               練習作品--< Hina > <br>
               2023/2 <br>
               Corel Painter/Photoshop <br>
               與<Hime>同一時期繪製，為接觸電繪後的第一件作品，練習重點為軟體操作/熟悉，以及繪圖的風格嘗試，同時盡可能熟悉繪圖版的手感。<br>
               第一次實作後，深感自己能力不足，希望以後能更加精進自己的技術。
               `);
            }, 500);
        }else if ($(e.target).hasClass("filp-img4")){
            setTimeout(function(){ 
               $(".introducing-text").html(`
               練習作品--無題 <br>
               2023/8 <br>
               Corel Painter/Photoshop <br>
               接觸電繪後的第三件作品，練習重點為人體結構、人物/畫面構圖以及對於整體色調的掌握。<br>
               現階段仍在摸索適合自己的風格及方式，繪圖的基礎技術也在努力練習。
               `);
            }, 500);
        }else if ($(e.target).hasClass("filp-img5")){
            setTimeout(function(){ 
               $(".introducing-text").html(`
               AI(Adobe Illustrator)練習--Tako <br>
               2023/4 <br>                   
               Adobe Illustrator <br>
               AI(Adobe Illustrator)的練習作品，將原有的圖進行二創改造，以不同的呈現手法將原圖變成太晶化模式。<br>
               `);
            }, 500);
        }else if ($(e.target).hasClass("filp-img6")){
            setTimeout(function(){ 
               $(".introducing-text").html(`
               練習作品--天秤 <br>
               2023/12 <br>                   
               Photoshop/Corel Painter <br>
               這次嘗試以PS取代Painter，作為主要的繪製軟體。 <br>
               草稿、初階底色上色以及眼睛繪製是以Painter做處理，之後的其他部分則全部轉到PS進行上色工作。<br> 
               `);
            }, 500);
        }
    }

    const showImage = function (e) {

        if ($(e.target).is("li")) return; 
        if (!!lastClickImage) {
            backImage(e); 
        }
        const image = e.target;
        lastClickImage = e.target.parentNode;
        const state = Flip.getState(image);
        header.append(image);
        Flip.from(state, {
            duration: 0.6,
            ease: "sine.out",
            absolute: true
        });
    }

    const backImage = function (e) {
        $(".introducing-text").html("請點選下方任一圖片以查看詳細介紹");
        const image =
            document.querySelector(".header img");
        const state = Flip.getState(image);
        lastClickImage.append(image);
        Flip.from(state, {
            duration: 0.6,
            ease: "sine.out",
            absolute: true
        });
        lastClickImage = null;
    }
});
