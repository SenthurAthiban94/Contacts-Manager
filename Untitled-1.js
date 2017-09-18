(function() {


    function getElementsByClassName(className) {

        if (document.getElementsByClassName) {
            return document.getElementsByClassName(className);
        } else {
            return document.querySelectorAll('.' + className); }
    }

    var domainName = window.location.hostname;




    if (domainName == "www.si.com") {
        document.getElementById("ad-100x1_970x90_970x66_970x250_728x90_ATF").style.width = "100%";

    }
    // window.addEventListener("resize", function(e) {

    //     if (window.innerWidth < 768) {

    //         if (document.getElementById("google_ads_iframe_/8484/fscom/collegefootball/main_1__container__"))
    //             document.getElementById("google_ads_iframe_/8484/fscom/collegefootball/main_1__container__").style.cssText = "height:auto !important";

    //            if (document.getElementById(jvxAdObject.adUnitContainerId).parentElement.parentElement)
    //             document.getElementById(jvxAdObject.adUnitContainerId).parentElement.parentElement.style.cssText = "overflow:visible";
    //     }

      



    // });
   

    function forceStyle() {

        if (document.getElementById(jvxAdObject.adUnitContainerId)) {

            if (document.getElementById(jvxAdObject.adUnitContainerId).parentElement.parentElement.parentElement.parentElement.parentElement) {

                var sports = document.getElementById(jvxAdObject.adUnitContainerId).parentElement.parentElement.parentElement.parentElement.parentElement;
                if (domainName == "www.foxsports.com") {
                    realignClientContainer(".fsAdContainer");
                    //window.setTimeout(,2000);
                    sports.style.cssText = "height:auto !important";

                }
            } else {
                window.setTimeout(forceStyle, 200)
            }

        } else {
            window.setTimeout(forceStyle, 200);
        }
    };
    window.setTimeout(forceStyle, 500);



    if (document.getElementsByClassName("row _21UDzFnr")[0])
        getElementsByClassName("row _21UDzFnr")[0].style.paddingTop = "0px";




    var crown = {
        "dom": {
            container: "",
            baseContainer: "",
            timeOut: ""
        },
        "update": function() {

            var container = crown.dom.container,
                base = crown.dom.baseContainer,
                screenWidth = document.documentElement.clientWidth,
                adHeight,
                marginLeft;
            domainName = location.hostname;

            if (location.hostname.indexOf("thedrive.com") > -1) {
                screenWidth = document.getElementsByClassName("ad wide-ad viewed")[0].getBoundingClientRect().width;
                document.getElementById(jvxAdObject.adUnitContainerId).style.cssText += "margin-left:auto";
                window.addEventListener("resize", crown.update);
            }
            container.style.width = screenWidth + "px";
            base.style.width = "100%";
            container.style.maxWidth = "100%";

            adHeight = (screenWidth > 768) ? (52 / 192 * screenWidth) : (432 / 768 * screenWidth);
            container.style.height = Math.round(adHeight) + "px";
            base.style.height = adHeight + "px";
            // container.style.marginLeft = "0px"; //Resetting Margin Left to 0;

            if (domainName == "www.trustedreviews.com" || domainName == "www.goodtoknow.co.uk" || domainName == "www.womanandhome.com") {
                container.style.width = "100%";
                adHeight = (screenWidth > 768) ? (52 / 260 * screenWidth) : (432 / 998 * screenWidth);
                container.style.height = Math.round(adHeight) + "px";
            }
            marginLeft = container.getBoundingClientRect().left;
            marginLeft = (marginLeft > 0) ? (marginLeft * -1) : marginLeft;

            if (location.hostname.indexOf("thedrive.com") > -1) {

                marginLeft = "auto"
            }


            var jvxContainer;


            function getjivoxAdContainer() {
                jvxContainer = document.getElementById(jvxAdObject.adUnitContainerId);

            }
            window.setTimeout(getjivoxAdContainer(), 500);


            function checktClientElement(elem, selector) {

                // Element.matches() polyfill
                if (!Element.prototype.matches) {
                    Element.prototype.matches =
                        Element.prototype.matchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector ||
                        Element.prototype.oMatchesSelector ||
                        Element.prototype.webkitMatchesSelector ||
                        function(s) {
                            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                                i = matches.length;
                            while (--i >= 0 && matches.item(i) !== this) {}
                            return i > -1;
                        };
                }

                // Setup parents array
                var parents = [];

                // Get matching parent elements
                for (; elem && elem !== document; elem = elem.parentNode) {

                    // Add matching parents to array
                    if (selector) {
                        if (elem.matches(selector)) {
                            parents.push(elem);

                        }
                    } else {
                        parents.push(elem);
                    }

                }

                return parents[0];

            };

            function realignClientContainer(clientElement) {
                console.log("clientElement", clientElement);
                jvxContainer = document.getElementById(jvxAdObject.adUnitContainerId);
                console.log("jvxContainer", jvxContainer);
                var parents = checktClientElement(jvxContainer, clientElement);
                console.log("parents", parents);
                if (parents.offsetHeight < jvxContainer.style.height.split("px")[0]) {
                    parents.style.height = jvxContainer.style.height.split("px")[0] + "px";

                }

            }
            var domainName = window.location.hostname;
            if (jvxContainer) {
                //console.log("jvxContainer",jvxContainer);
                if (domainName == "stage.golf.com")
                    realignClientContainer(".adhesion-ad");

                if (domainName.indexOf("thedrive.com" > -1)) {

                    // document.getElementById("jvxAdObject.adUnitContainerId").style.cssText +="width: 100vw; position: relative; left: 50%;  right: 50%;  margin-left: -50vw;  margin-right: -50vw;";
                    // document.getElementsByClassName("ad wide-ad viewed")[0].style.overflow="visible";

                    //  window.addEventListener("resize", function(){
                    // document.getElementById("jvxAdObject.adUnitContainerId").style.cssText +="width: 100vw; position: relative; left: 50%;  right: 50%;  margin-left: -50vw;  margin-right: -50vw;";
                    // document.getElementsByClassName("ad wide-ad viewed")[0].style.overflow="visible";
                    //  });

                }
            } else {
                window.setTimeout(getjivoxAdContainer(), 200);
            }

            //




            if (domainName == "www.foxsports.com") {
                realignClientContainer(".fsAdContainer");
                var bannerAd = document.getElementsByClassName("banner-ad-container")
                bannerAd[0].style.marginBottom = "180px";
                jvxContainer.style.marginTop = "-5px";
            }

            if (domainName == "www.coastalliving.com") {
                document.getElementById(jvxAdObject.adUnitContainerId).style.zIndex = "9";
            }

            if (domainName == "www.trustedreviews.com") {
                document.getElementById(jvxAdObject.baseId).style.visibility = "visible";
                topParentContainer = document.getElementsByClassName("leaderboard01-container")[0];
                if (topParentContainer)
                    topParentContainer.style.overflow = "visible";

            }

            if (domainName == "www.health.com") {
                jvxContainer = document.getElementById(jvxAdObject.adUnitContainerId);
                var clientparent = checktClientElement(jvxContainer, ".leaderboard-ad-unit");
                clientparent.style.cssText += "margin:0";
                crown.alignPublisherContainer("1.3");

            }

        },
        "attachResizeEvent": function() {

            window.addEventListener("resize", function(e) {

                window.setInterval(function() {
                    crown.update();
                }, 1000);

                if (window.innerWidth < 768) {

            if (document.getElementById("google_ads_iframe_/8484/fscom/collegefootball/main_1__container__"))
                document.getElementById("google_ads_iframe_/8484/fscom/collegefootball/main_1__container__").style.cssText = "height:auto !important";

               if (document.getElementById(jvxAdObject.adUnitContainerId).parentElement.parentElement)
                document.getElementById(jvxAdObject.adUnitContainerId).parentElement.parentElement.style.cssText = "overflow:visible";
        }

      

                if (domainName == "www.health.com") {
                    crown.alignPublisherContainer("1.3");
                }
                crown.alignListOfSites();
            });
            window.onscroll = function()

            {
                
                console.log("scrolled");
                if (domainName == "www.health.com") {
                    crown.alignPublisherContainer("1.3");
                }


                crown.alignListOfSites();

            }

        },
        "alignPublisherContainer": function(data) {

            jvxContainer = document.getElementById(jvxAdObject.adUnitContainerId);
            var divideVal = data,
                adParent = document.getElementsByClassName("leaderboard-ad-unit")[0],
                sumOfContainer = jvxContainer.offsetHeight + adParent.offsetHeight,
                publisher = document.getElementsByClassName("top-spacer")[0],
                finalPadding = Math.round(sumOfContainer - adParent.parentElement.offsetHeight / divideVal) + "px";
            publisher.style.paddingTop = finalPadding;

        },

        "alignListOfSites": function() {

            var hostList = ["www.decanter.com", "www.shootinguk.co.uk", "www.superyachtworld.com", "www.yachtingmonthly.com", "www.countrylife.co.uk"],
                zindexHostList = ["www.amateurgardening.com", "www.amateurphotographer.co.uk", "www.anglersmail.co.uk", "www.celebsnow.co.uk", "www.crafttube.com", "www.cyclingweekly.com", "www.golf-monthly.co.uk", "www.goodtoknow.co.uk",
                    "www.horseandhound.co.uk", "www.lifedeathprizes.com", "www.live-smart.co", "www.mbr.co.uk", "www.mby.com", "www.pbo.co.uk", "www.rugbyworld.com", "www.thefield.co.uk", "www.uncut.co.uk",
                    "www.whatdigitalcamera.com", "www.whatsontv.co.uk", "www.womanmagazine.co.uk", "www.womanandhome.com", "www.womansown.co.uk", "www.womansweekly.com", "www.worldsoccer.com", "www.yachtingworld.com", "www.ybw.com", "www.idealhome.co.uk", "www.wallpaper.com", "www.instyle.co.uk"
                ];

                spacingSiteLists=["www.ybw.com","www.yachtingworld.com","www.yachtingmonthly.com","www.worldsoccer.com","www.womansweekly.com","www.womansown.co.uk","www.womanmagazine.co.uk","www.whatsontv.co.uk","www.whatdigitalcamera.com","www.uncut.co.uk","www.thefield.co.uk","www.superyachtworld.com","www.shootinguk.co.uk","www.rugbyworld.com","www.mbr.co.uk","www.mby.com","www.pbo.co.uk","www.mby.com","www.live-smart.co","www.lifedeathprizes.com","www.horseandhound.co.uk","www.countrylife.co.uk","www.amateurgardening.com","www.amateurphotographer.co.uk","www.anglersmail.co.uk","www.celebsnow.co.uk","www.crafttube.com","www.decanter.com","www.cyclingweekly.com","www.golf-monthly.co.uk"];

            jvxContainer = document.getElementById(jvxAdObject.adUnitContainerId);
              domainName = window.location.hostname

            var topParentContainer;


            if(domainName=="www.instyle.co.uk")
{
  var jvxContainer=document.getElementById(jvxAdObject.adUnitContainerId);
  jvxContainer.parentElement.style.cssText+="height:"+jvxContainer.style.height;
}
            if (domainName == "www.marieclaire.co.uk") {
                   var siteHeight=document.getElementsByClassName("section-content")[0],marieParentContainer = crown.getClientElement(jvxContainer, ".has-adverts .header-advert");
                   siteHeight.style.cssText+="height:"+jvxContainer.style.height;
                 marieParentContainer.style.height = jvxContainer.style.height;
                topParentContainer = document.getElementById("wrapper");
                topParentContainer.style.paddingTop = document.getElementById(jvxAdObject.adUnitContainerId).getBoundingClientRect().bottom + window.scrollY + "px";
                  (function setClientHeight() {
                     document.getElementsByClassName("section-content")[0].style.cssText+="height:"+jvxContainer.style.height;
                     if(siteHeight.style.height.split("px")[0]!=jvxContainer.style.height.split("px")[0])
                      window.setTimeout(setClientHeight,1000);
                })();


                

function setClientHeight() {
  document.getElementsByClassName("section-content")[0].style.cssText+="height:"+jvxContainer.style.height;
                     if(siteHeight.style.height.split("px")[0]!=jvxContainer.style.height.split("px")[0])
                      setClientHeight();
                    else
                      checkClientHeight(setClientHeight);
}

var checkClientHeight = setInterval(function(){ setClientHeight(); },1000);


                    // window.setTimeout(setClientHeight,1500);

            }
            ContainerWidth = document.documentElement.clientWidth;

           
            
                
            spacingSiteLists.forEach(function(listhost) {
                 topParentContainer = jvxContainer.parentElement;
                 if(domainName==listhost){
                    if (topParentContainer) {
                        // var parentHeight=jvxContainer.style.height.split("px")[0]-7;
                        // topParentContainer.style.cssText +="height:"+ ContainerWidth >= 1320 ? "height:358px" : "height:268px";
                        topParentContainer.style.cssText +="height:"+jvxContainer.style.height;
                    }
                }
            });
        


            if (domainName == "www.wallpaper.com") {
                parentContainer = document.getElementsByClassName("site-top")[0], mainContainer = document.getElementsByClassName("site-main")[0];

                parentContainer.style.paddingBottom = "0";
                mainContainer.style.marginTop = "0";
            }

            if (domainName == "www.goodtoknow.co.uk" || domainName == "www.trustedreviews.com" || domainName == "www.womanandhome.com") {
                topParentContainer.style.cssText += "height:270px";
            }

            hostList.forEach(function(listhost) {
                if (listhost == domainName) {

                    jvxContainer.style.zIndex = "999";
                }

            });
            zindexHostList.forEach(function(hstname) {
                if (hstname == domainName) {
                    jvxContainer.style.marginLeft = "0px";


                    if (domainName == "www.goodtoknow.co.uk" || domainName == "www.womanandhome.com" || domainName == "www.instyle.co.uk")
                        jvxContainer.style.zIndex = "0";
                    else
                        jvxContainer.style.zIndex = "999";




                }


                if (domainName == "www.goodtoknow.co.uk") {

                    (function ifJQueryExists() {

                        if (typeof jQuery === "function") {
                            var ptr = jQuery._data(window, "events").scroll[0].handler;

                            window.addEventListener("scroll", function() {
                                if (window.scrollY < 500) {
                                    jQuery._data(window, "events").scroll[0].handler = null;
                                } else {
                                    jQuery._data(window, "events").scroll[0].handler = ptr;
                                }
                            })
                        } else {
                            window.setTimeout(ifJQueryExists, 100)
                        }


                    })();
                }


            });

            if (domainName == "www.idealhome.co.uk" || domainName == "www.nme.com" || domainName == "www.look.co.uk") {
                document.getElementById("wrapper").style.paddingTop = document.getElementById(jvxAdObject.adUnitContainerId).getBoundingClientRect().height + "px";

                document.getElementById(jvxAdObject.adUnitContainerId).parentElement.parentElement.parentElement.parentElement.style.cssText += "height:" + document.getElementById(jvxAdObject.adUnitContainerId).getBoundingClientRect().height + "px !important";

                if (document.getElementsByClassName("section-content")[0])
                    document.getElementsByClassName("section-content")[0].setAttribute("class", "");
                //
            }


        },
        "getClientElement": function(elem, selector) {

            // Element.matches() polyfill
            if (!Element.prototype.matches) {
                Element.prototype.matches =
                    Element.prototype.matchesSelector ||
                    Element.prototype.mozMatchesSelector ||
                    Element.prototype.msMatchesSelector ||
                    Element.prototype.oMatchesSelector ||
                    Element.prototype.webkitMatchesSelector ||
                    function(s) {
                        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                            i = matches.length;
                        while (--i >= 0 && matches.item(i) !== this) {}
                        return i > -1;
                    };
            }

            // Setup parents array
            var parents = [];

            // Get matching parent elements
            for (; elem && elem !== document; elem = elem.parentNode) {

                // Add matching parents to array
                if (selector) {
                    if (elem.matches(selector)) {
                        parents.push(elem);

                    }
                } else {
                    parents.push(elem);
                }

            }

            return parents[0];
        },
        "init": function() {

            window.addEventListener("message", function(e) {
                //console.log(e);
                if (e.data = "jvxAdObject:expansionLoaded") {
                    crown.dom.container = document.getElementById(jvxAdObject.adUnitContainerId);
                    crown.dom.baseContainer = document.getElementById(jvxAdObject.baseId);

                    crown.update();
                    crown.attachResizeEvent();
                    crown.alignListOfSites();
                }

            });

        }

    };

    crown.init();



})();