<script>

    // https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0

    var menu = document.querySelector(".menu");
    var ham = document.querySelector(".ham");
    var menuIcon = document.querySelector(".menuIcon");
    var xIcon = document.querySelector(".xIcon");

    ham.addEventListener("click", toggleMenu);

    // toggle menu in and out when clicking on the hamburger
    function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        xIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        // menu.style.marginTop = "1000px";
        xIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
    }

    var menuLinks = document.querySelectorAll(".menuLink");

    menuLinks.forEach( 
    function(menuLink) { 
        menuLink.addEventListener("click", toggleMenu);
    }
    )
    // FIN BURGER

    // var ul = document.querrySelector('ul');
    // var li = document.querrySelectorAll('nav li');
    // var length = ul.childNodes.length;
    
    // for (var h; h < li.length; h++){
    //         li[h].onclick = function ul(){
    //         li.classList.add('active');
    //     };
    // }
    
    
    // ul.addEventListener("click", ul);
    
    
    // function ul();
    // if (click) 
    //     for chaque li
    
    //     background
    


    // https://stackoverflow.com/questions/36250901/how-can-i-add-class-on-active-li-with-javascript-code
    // var a = document.querySelectorAll("nav li a");
    // for (var i = 0; i < a.length; i++) {
    //     a[i].onclick = function() {
    //     var b = document.querySelector("nav li.active");
    //     if (b) {
    //         b.classList.remove("active");
    //     }
    //     this.parentNode.classList.add('active');
    //     };
    // }

    yOffset = window.pageYOffset;
    shad1 = document.getElementById('profil');
    shad2 = document.getElementById('experiences');
    shad3 = document.getElementById('competences');
    shad4 = document.getElementById('formations');
    shad5 = document.getElementById('projets');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 ) {
    document.querySelectorAll('li').classList.add('active');
  }
}


// var mainDiv = document.querySelectorAll('mainDiv');
// for(var u = 0; mainDiv < mainDiv.length; u++) {
//     mainDiv[u].classList.add('active');
    
// }


// var a = document.querySelectorAll("nav li a");
//     if (yOffset > shad1) {
//         a[i].onclick = function() {
//         var b = document.querySelector("nav li.active");
//         if (b) {
//             b.classList.remove("active");
//         }
//         this.parentNode.classList.add('active');
//         };
//     }
//     if (yOffset > shad1){
    //         b.classList.add('active');
    //     }
    
    




    
    



   



    // https://www.w3schools.com/howto/howto_js_navbar_sticky.asp

    window.onscroll = function() {stickyNav()};

    var navbar = document.querySelector("nav");

    var sticky = navbar.offsetTop;

    var boutony = document.getElementById('bouton1');  





    function stickyNav(){
        // if(window.pageYOffset >= sticky){
        //     navbar.classList.add("sticky");
        //     boutony.style.display = "inline-block";
        //     boutony.classList.add('sticky2');
        // } else {
        //     navbar.classList.remove("sticky");
        //     boutony.style.display = "none";
        //     boutony.classList.remove('sticky2');
        // }

        // if(window.pageYOffset <= sticky){
        //     navbar.classList.remove("sticky");
        //     boutony.style.display = "none";
        //     boutony.classList.remove('sticky2');
        // } else {
        //     navbar.classList.add("sticky");
        //     boutony.style.display = "inline-block";
        //     boutony.classList.add('sticky2');
        // }

        var main = document.querySelector("main");

        // if(window.pageYOffset <= sticky){
        //     navbar.style.position = "absolute";
        //     boutony.style.display = "none";
        //     boutony.classList.remove('sticky2');
        //     main.style.marginTop = "0";
        //     navbar.style.marginTop = "1000px";
        // } else {
        //     navbar.style.display = "inline-block";
        //     navbar.style.position = "fixed";
        //     boutony.style.display = "inline-block";
        //     boutony.classList.add('sticky2');
        //     navbar.style.top = "0";
        //     navbar.style.marginTop = "200px";
        // }

        if(window.pageYOffset <= sticky){
            navbar.style.position = "absolute";
            boutony.style.display = "none";
            boutony.classList.remove('sticky2');
            main.style.marginTop = "0";
            navbar.style.marginTop = "1000px";
            // https://stackoverflow.com/questions/28607265/execute-javascript-code-only-if-width-is-higher-than-x-pixels
        } else if(document.documentElement.clientWidth > 600) {
            navbar.style.display = "inline-block";
            navbar.style.position = "fixed";
            boutony.style.display = "inline-block";
            boutony.classList.add('sticky2');
            navbar.style.top = "0";
            navbar.style.marginTop = "200px";
        } else {
            // navbar.style.display = "none";
            navbar.style.position = "relative";
            document.getElementById("ham").classList.add = "ham";
            
            menu.style.position ="fixed";
            navbar.style.marginTop = "-200px";
            // menu.style.marginRight = "50px";
            // ham.style.marginRight = "50px";

        }



        // make it appear after pageYOffset > sticky
        // var main = document.querySelector("main");

        // if(window.pageYOffset <= sticky){
        //     navbar.style.display = "none";
        //     boutony.style.display = "none";
        //     boutony.classList.remove('sticky2');
        //     main.style.marginTop = " 0";
        // } else {
        //     navbar.style.display = "block";
        //     navbar.style.position = "fixed";
        //     boutony.style.display = "inline-block";
        //     boutony.classList.add('sticky2');
        //     navbar.style.top = "0";
        //     navbar.style.marginTop = " 20px";
        // }
    }

    // https://css-tricks.com/how-to-make-an-unobtrusive-scroll-to-top-button/
    var scrollDownBtn = document.getElementById("scrollDownBtn");
    
    var rootElement = document.documentElement;

    function scrollDown(){
        rootElement.scrollTo({
            top: 740,
            // behavior: "smooth" car html dans css déjà smooth
        })
    };

    scrollDownBtn.addEventListener("click", scrollDown);



    
    // var active = getElementsByTagName('li')
    // switch (active) {
    //     case #profil:
    //     active.classList.addEventListener('active');
    //     break;
    // }

    // var containers = document.getElementById('containers');
    
    // if() {function (){

    // }
    // }

    
    
    
    // utiliser toggle https://www.w3schools.com/howto/howto_js_toggle_class.asp
    var ok
    
    
    // multicolor quand bouton appuyé https://jsbeginners.com/change-background-color-project/
    
    // var boutony = document.getElementById('bouton1');
    // var mainy = document.querySelector('main');
    
    // boutony.addEventListener('click', functionBlack);
    
    // function functionBlack (){
        //     mainy.classList.add('black')
        // };
        var ok
        
        // function myFunction (){
            //     mainy.classList.toggle('black')
            //     boutony.innerHTML = 'Light';
            // };
        
            var mainy = document.querySelector('main');
            var blacky = mainy.style.backgroundColor;
            var boutony = document.getElementById('bouton1');  
            
            // document.querySelector('main').style.backgroundColor
            
            boutony.addEventListener("click", turnBlack);
            
            
            function turnBlack (){
                
            // if(blacky !== 'black') {
                //     mainy.classList.add('black');
                //     boutony.innerHTML = 'Light';
                // } else {
                    //     mainy.classList.remove('black');
                    //     boutony.innerHTML = 'Black';
                    // };
                    var mainy = document.querySelector('main');
                    var blacky = mainy.style.backgroundColor;
                    
                    if( blacky === 'black') {
                        document.querySelector('main').style.backgroundColor = 'rgb(' + 211 + ',' + 211 + ',' + 211 +')';
                        boutony.innerHTML = 'Black';

                        function darkTitles(){
                            var i, dark, dark2;
                            dark = document.querySelectorAll('h2', 'h3')
                            ;
                            dark2 = document.querySelectorAll('p');

                            for (i = 0; i < dark.length; i++) {
                                dark[i].style.color = 'black';
                                dark2[i].style.color = 'black';
                            }
                        }
                        darkTitles();
                    } else {
                        document.querySelector('main').style.backgroundColor = "black";
                        boutony.innerHTML = 'Light';
                        // document.querySelectorAll('#profil, #formations, #projets').style.backgroundColor = "black";
                        
                        function lightTitles(){
                            var i, light, light2; 
                            light = document.querySelectorAll('h2', 'h3');
                            light2 = document.querySelectorAll('p', 'ul.experiencesUl li');

                            
                            for (i = 0; i < light.length; i++) {
                                light[i].style.color = "white";
                                light2[i].style.color = 'white';
                            }
                        }
                        lightTitles();
                        
                        // other method
                        // var h2s = document.querySelectorAll('h2');
                        
                        // h2s.forEach(h2 => h2.style.color = "white");
                    };
                    
                
                    // NEED TO SOLVE THIS
                    // if( blacky === 'black') {
                        //     mainy.classList.remove('black');
                        //     boutony.innerHTML = 'Black';
                        // } else {
                            //     mainy.classList.add('black');
                            //     boutony.innerHTML = 'Light';
                            // };
                            
                            // doesn't work
                            // switch (blacky) {
                                //     case 'black':
                //     mainy.classList.remove('black');
                //     boutony.innerHTML = 'Black';
                //     break;
                //     case ! 'black':
                //     mainy.classList.add('black');
                //     boutony.innerHTML = 'Light';
                // }
            };

            // if(mainy.classList.contains('black')){
            //     boutony.innerHTML = 'Light';
            // } else {
            //     boutony.innerHTML = 'Black';
            //     mainy.classList.add('black');
            // }
            
    
    // boutony.addEventListener('click', toggleLight);
    
    // function toggleLight(){
    //     if (mainy.classList.contains('black')) {
    //         boutony.innerHTML = 'Black';
    // };

    // nav starting a part backgroundColor = dark
    // var dark = document.

    // suivi de la nav
        // function nav (){
        //     if ( getElementsByTagName('ul'). > getElementsByTagName('li')) {
        //         document.getElementsByTagName('nav').classList.add('black');
        //     }
        // }
</script>