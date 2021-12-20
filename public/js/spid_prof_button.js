var style = document.createElement('style');
style.innerHTML = `
@import url(https://fonts.googleapis.com/css?family=Titillium+Web:400, 600);
    .italia-it-button {
    display: inline-block;
    position: relative;
    padding: 0;
    color: #FFF;
    font-family: "Titillium Web", HelveticaNeue, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
    font-weight: 600;
    line-height: 1em;
    text-decoration: none;
    border: 0;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
}

#spid-prof-button *{
    box-sizing: content-box !important;
} 
#spid-prof-button .italia-it-button-icon, #spid-prof-button .italia-it-button-text {
    display: block;
    float: left;
}
#spid-prof-button .italia-it-button-icon {
    margin: 0 -.4em 0 0;
    padding: 0.6em .8em .5em;
    border-right: rgba(255, 255, 255, 0.1) 0.1em solid;
}
#spid-prof-button .italia-it-button-text {
    padding: .95em 1em .85em 1em;
    font-size: 1.15em;
    text-align: center;
}
svg {
    width: 1.8em;
    height: 1.8em;
    fill: #fff;
}
#spid-prof-button .italia-it-block {
    display: block;
}
#spid-prof-button .italia-it-button-size-s {
    font-size: 10px;
    width: 150px;
}
#spid-prof-button .italia-it-button-size-s > span img {
    width: 19px;
    height: 19px;
    border: 0;
}
#spid-prof-button .italia-it-button-size-m {
    font-size: 14px;
    width: 220px;
}
#spid-prof-button .italia-it-button-size-m > span img {
    width: 29px;
    height: 29px;
    border: 0;
}
#spid-prof-button .italia-it-button-size-l {
    font-size: 20px;
    width: 280px;
}
#spid-prof-button .italia-it-button-size-l > span img {
    width: 38px;
    height: 38px;
    border: 0;
}
#spid-prof-button .italia-it-button-size-xl {
    font-size: 25px;
    width: 340px;
}
#spid-prof-button .italia-it-button-size-xl > span img {
    width: 47px;
    height: 47px;
    border: 0;
}
#spid-prof-button .button-spid {
    background-color: #06C;
    color: #FFF;
}
#spid-prof-button .button-spid svg {
    fill: #FFF;
}
#spid-prof-button .button-spid:hover {
    background-color: #036;
    color: #FFF;
}
#spid-prof-button .button-spid:active {
    background-color: #83BEED;
    color: #036;
}
#spid-prof-button .spid-idp-button {
    position: absolute;
    z-index: 1039;
    display: none;
}
#spid-prof-button .spid-idp-button .spid-idp-button-menu, #spid-prof-button .spid-idp-button .spid-idp-button-panel {
    list-style: none;
    background: white;
    border: solid 1px #ddd;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    overflow: visible;
    padding: 0;
    margin: 0;
}
#spid-prof-button #spid-idp-button-small-get, #spid-prof-button #spid-idp-button-medium-get, #spid-prof-button #spid-idp-button-small-post, #spid-prof-button #spid-idp-button-medium-post {
    width: 230px;
}
#spid-prof-button #spid-idp-button-large-get, #spid-prof-button #spid-idp-button-large-post {
    width: 270px;
}
#spid-prof-button #spid-idp-button-xlarge-get, #spid-prof-button #spid-idp-button-xlarge-post {
    width: 330px;
}
#spid-prof-button .spid-idp-button .spid-idp-button-panel {
    padding: 10px;
}
#spid-prof-button .spid-idp-button.spid-idp-button-tip {
    margin-top: 8px;
}
#spid-prof-button .spid-idp-button.spid-idp-button-tip:before {
    position: absolute;
    top: -6px;
    left: 9px;
    content: "";
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid #ddd;
    display: inline-block;
}
#spid-prof-button .spid-idp-button.spid-idp-button-tip:after {
    position: absolute;
    top: -5px;
    left: 10px;
    content: "";
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid white;
    display: inline-block;
}
#spid-prof-button .spid-idp-button.spid-idp-button-tip.spid-idp-button-anchor-right:before {
    left: auto;
    right: 9px;
}
#spid-prof-button .spid-idp-button.spid-idp-button-tip.spid-idp-button-anchor-right:after {
    left: auto;
    right: 10px;
}
#spid-prof-button .spid-idp-button.spid-idp-button-scroll .spid-idp-button-menu, #spid-prof-button .spid-idp-button.spid-idp-button-scroll .spid-idp-button-panel {
    max-height: 180px;
    overflow: auto;
}
#spid-prof-button .spid-idp-button .spid-idp-button-menu li {
    list-style: none;
    padding: 0 0;
    margin: 0;
    line-height: 18px;
}
#spid-prof-button .spid-idp-button .spid-idp-button-menu li > a, #spid-prof-button .spid-idp-button .spid-idp-button-menu label {
    display: block;
    font-family: "Titillium Web", HelveticaNeue, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
    font-weight: 600;
    font-size: .9em;
    color: #06C;
    text-decoration: underline;
    line-height: 18px;
    padding-top: 5px;
    white-space: nowrap;
    border-bottom: 1px solid #ddd;
}
#spid-prof-button .spid-idp-button .spid-idp-button-menu li > a:hover, #spid-prof-button .spid-idp-button .spid-idp-button-menu label:hover {
    color: #036;
    cursor: pointer;
    background-color: #F0F0F0;
}
#spid-prof-button .spid-idp-button .spid-idp-button-menu li > a img {
    height: 25px;
    padding: 10px 0 10px 10px;
    border: 0;
}
#spid-prof-button .idp-button-idp-logo {
    font-size: 100%;
    height: 10%;
    width: 100%;
    border: 0;
    border-bottom: 1px solid #CCC;
    background-color: #FFF;
    padding: 15px;
    text-align: left;
    cursor: pointer;
}
#spid-prof-button .idp-button-idp-logo:hover {
    background-color: #F0F0F0;
}
#spid-prof-button .idp-button-idp-logo img {
    height: 25px;
    vertical-align: middle;
    cursor: pointer;
}
#spid-prof-button .spid-top-menu-space-10 > a img {
    margin-top: 10px;
}
#spid-prof-button .spid-top-menu-space-20 > a img {
    margin-top: 20px;
}
#spid-prof-button .spid-top-menu-line {
    border-top: 5px solid #000;
}
#spid-prof-button .spid-idp-support-link > a {
    padding: 5px 0 10px 10px;
}
#spid-prof-button .spid-sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}

.button-eidas {
    background-color: #06C;
    color: #FFF
}

.button-eidas svg {
    fill: #FFF
}

.button-eidas:hover {
    background-color: #036;
    color: #FFF
}

.button-eidas:active {
    background-color: #83BEED;
    color: #036
}

.eidas-idp-button {
    position: absolute;
    z-index: 1039;
    display: none
}

.eidas-idp-button .eidas-idp-button-menu,
.eidas-idp-button .eidas-idp-button-panel {
    list-style: none;
    background: white;
    border: solid 1px #ddd;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    overflow: visible;
    padding: 0;
    margin: 0
}

#eidas-idp-button-small-get,
#eidas-idp-button-medium-get,
#eidas-idp-button-small-post,
#eidas-idp-button-medium-post {
    width: 230px
}

#eidas-idp-button-large-get,
#eidas-idp-button-large-post {
    width: 270px
}

#eidas-idp-button-xlarge-get,
#eidas-idp-button-xlarge-post {
    width: 330px
}

.eidas-idp-button .eidas-idp-button-panel {
    padding: 10px
}

.eidas-idp-button.eidas-idp-button-tip {
    margin-top: 8px
}

.eidas-idp-button.eidas-idp-button-tip:before {
    position: absolute;
    top: -6px;
    left: 9px;
    content: "";
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid #ddd;
    display: inline-block
}

.eidas-idp-button.eidas-idp-button-tip:after {
    position: absolute;
    top: -5px;
    left: 10px;
    content: "";
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid white;
    display: inline-block
}

.eidas-idp-button.eidas-idp-button-tip.eidas-idp-button-anchor-right:before {
    left: auto;
    right: 9px
}

.eidas-idp-button.eidas-idp-button-tip.eidas-idp-button-anchor-right:after {
    left: auto;
    right: 10px
}

.eidas-idp-button.eidas-idp-button-scroll .eidas-idp-button-menu,
.eidas-idp-button.eidas-idp-button-scroll .eidas-idp-button-panel {
    max-height: 180px;
    overflow: auto
}

.eidas-idp-button .eidas-idp-button-menu li {
    list-style: none;
    padding: 0 0;
    margin: 0;
    line-height: 18px
}

.eidas-idp-button .eidas-idp-button-menu li > a,
.eidas-idp-button .eidas-idp-button-menu label {
    display: block;
    font-family: "Titillium Web", HelveticaNeue, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
    font-weight: 600;
    font-size: .9em;
    color: #3b61b6; 
    text-decoration: underline;
    line-height: 18px;
    padding-top: 5px;
    white-space: nowrap;
    border-bottom: 1px solid #ddd;
}

.eidas-idp-button .eidas-idp-button-menu li > a:hover,
.eidas-idp-button .eidas-idp-button-menu label:hover {
    color: #036;
    cursor: pointer;
    background-color: #F0F0F0
}

.eidas-idp-button .eidas-idp-button-menu li > a img {
    height: 25px;
    padding: 10px 0 10px 10px;
    border: 0
}


`;
document.head.appendChild(style);

/* js per bottone spid sp */
jQuery &&
    (function (t) {
        function i(i, n) {
            var d = i ? t(this) : n,
                o = t(d.attr("spid-idp-button")),
                r = d.hasClass("spid-idp-button-open");
            if (i) {
                if (t(i.target).hasClass("spid-idp-button-ignore")) return;
                i.preventDefault(), i.stopPropagation();
            } else if (d !== n.target && t(n.target).hasClass("spid-idp-button-ignore")) return;
            s(), r || d.hasClass("spid-idp-button-disabled") || (d.addClass("spid-idp-button-open"), o.data("spid-idp-button-trigger", d).show(), e(), o.trigger("show", { spidIDPButton: o, trigger: d }));
        }
        function s(i) {
            var s = i ? t(i.target).parents().addBack() : null;
            if (s && s.is(".spid-idp-button")) {
                if (!s.is(".spid-idp-button-menu")) return;
                if (!s.is("A")) return;
            }
            t(document)
                .find(".spid-idp-button:visible")
                .each(function () {
                    var i = t(this);
                    i.hide().removeData("spid-idp-button-trigger").trigger("hide", { spidIDPButton: i });
                }),
                t(document).find(".spid-idp-button-open").removeClass("spid-idp-button-open");
        }
        function e() {
            var i = t(".spid-idp-button:visible").eq(0),
                s = i.data("spid-idp-button-trigger"),
                e = s ? parseInt(s.attr("data-horizontal-offset") || 0, 10) : null,
                n = s ? parseInt(s.attr("data-vertical-offset") || 0, 10) : null;
            0 !== i.length &&
                s &&
                (i.hasClass("spid-idp-button-relative")
                    ? i.css({
                          left: i.hasClass("spid-idp-button-anchor-right") ? s.position().left - (i.outerWidth(!0) - s.outerWidth(!0)) - parseInt(s.css("margin-right"), 10) + e : s.position().left + parseInt(s.css("margin-left"), 10) + e,
                          top: s.position().top + s.outerHeight(!0) - parseInt(s.css("margin-top"), 10) + n,
                      })
                    : i.css({ left: i.hasClass("spid-idp-button-anchor-right") ? s.offset().left - (i.outerWidth() - s.outerWidth()) + e : s.offset().left + e, top: s.offset().top + s.outerHeight() + n }));
        }
        t.extend(t.fn, {
            spidIDPButton: function (e, n) {
                switch (e) {
                    case "show":
                        return i(null, t(this)), t(this);
                    case "hide":
                        return s(), t(this);
                    case "attach":
                        return t(this).attr("spid-idp-button", n);
                    case "detach":
                        return s(), t(this).removeAttr("spid-idp-button");
                    case "disable":
                        return t(this).addClass("spid-idp-button-disabled");
                    case "enable":
                        return s(), t(this).removeClass("spid-idp-button-disabled");
                }
            },
        }),
            t(document).on("click.spid-idp-button", "[spid-idp-button]", i),
            t(document).on("click.spid-idp-button", s),
            t(window).on("resize", e);
    })(jQuery);



/* classe per inizializzare bottone come spid-smart-button se inserito placeholder in pagina e inizializzata classe */
var SPIDPROF = (function () {
    /* SPIDPROF.init() FACTORY METHOD */

    var defaults = {
        path_img: '/public/img/spid',
        url: 'sso_init',
        eidas: false,
        tipo_accesso: ''
    };

    // class for objects returned by SPIDPROF.init()
    var spidObj = function (config) {
        this.config = config;
    };

    spidObj.prototype._render = function (config) {
        var spid = this;
        
        // only the first matching placeholder will be rendered
        // var placeholder = document.querySelector("#spid-prof-button");
        // if (!placeholder) {
        //     console.warn('Nessun placeholder HTML trovato nella pagina per i pulsanti SPID.');
        //     return;
        // }
        
        if ($("#spid-prof-button").length == 0) {
            console.warn('Nessun placeholder HTML trovato nella pagina per i pulsanti SPID.');
            return;
        }
        let str_button = "";
        if(config.eidas){
            str_button += '<div class="eidas-idp-button-link" data-idp="eidas"><br />\
                <a href="#" class="italia-it-button italia-it-button-size-m button-eidas" eidas-idp-button="#eidas-idp-button-medium-get" aria-haspopup="false"  aria-expanded="false">\
                    <span class="italia-it-button-icon"><img src="'+config.path_img+'/ficep-it-eidas-ybw.svg" alt="Accedi con eIDAS" /></span>\
                    <span class="italia-it-button-text">Login with eIDAS</span>\
                </a><br />\
                <div class="text_eidas">\
                    <a href="#">Sign in with a digital identity<br /> from another European Country</a>\
                </div><br />\
            </div>';
        }
        
        str_button += '<a href="#" class="italia-it-button italia-it-button-size-m button-spid" spid-idp-button="#spid-idp-button-medium-get" aria-haspopup="true" aria-expanded="false">\
                <span class="italia-it-button-icon"><img src="'+config.path_img+'/spid-ico-circle-bb.svg"  alt="" /></span>\
                <span class="italia-it-button-text">Entra con SPID</span>\
            </a>\
            <div id="spid-idp-button-medium-get" class="spid-idp-button spid-idp-button-tip spid-idp-button-relative">\
                <ul id="spid-idp-list-medium-root-get" class="spid-idp-button-menu" aria-labelledby="spid-idp">\
                    <li class="spid-idp-button-link" data-idp="arubaid">\
                        <a href="#"><span class="spid-sr-only">Aruba ID</span><img src="'+config.path_img+'/spid-idp-arubaid.svg"  alt="Aruba ID" /></a>\
                    </li>\
                    <li class="spid-idp-button-link" data-idp="infocert">\
                        <a href="#"><span class="spid-sr-only">Infocert ID</span><img src="'+config.path_img+'/spid-idp-infocertid.svg"  alt="Infocert ID" /></a>\
                    </li>\
                    <li class="spid-idp-button-link" data-idp="intesa">\
                        <a href="#"><span class="spid-sr-only">Intesa ID</span><img src="'+config.path_img+'/spid-idp-intesaid.svg"  alt="Intesa ID" /></a>\
                    </li>\
                    <li class="spid-idp-button-link" data-idp="lepida">\
                        <a href="#"><span class="spid-sr-only">Lepida ID</span><img src="'+config.path_img+'/spid-idp-lepidaid.svg" alt="Lepida ID" /></a>\
                    </li>\
                    <li class="spid-idp-button-link" data-idp="namirialid">\
                        <a href="#"><span class="spid-sr-only">Namirial ID</span><img src="'+config.path_img+'/spid-idp-namirialid.svg"  alt="Namirial ID" /></a>\
                    </li>\
                    <li class="spid-idp-button-link" data-idp="poste">\
                        <a href="#"><span class="spid-sr-only">Poste ID</span><img src="'+config.path_img+'/spid-idp-posteid.svg"  alt="Poste ID" /></a>\
                    </li>\
                    <li class="spid-idp-button-link" data-idp="sielte">\
                        <a href="#"><span class="spid-sr-only">Sielte ID</span><img src="'+config.path_img+'/spid-idp-sielteid.svg"  alt="Sielte ID" /></a>\
                    </li>\
                    <li class="spid-idp-button-link" data-idp="spiditalia">\
                        <a href="#"><span class="spid-sr-only">SPIDItalia Register.it</span><img src="'+config.path_img+'/spid-idp-spiditalia.svg"  alt="SpidItalia" /></a>\
                    </li>\
                    <li class="spid-idp-button-link" data-idp="tim">\
                        <a href="#"><span class="spid-sr-only">Tim ID</span><img src="'+config.path_img+'/spid-idp-timid.svg"  alt="Tim ID" /></a>\
                    </li>\
                    <li class="spid-idp-support-link">\
                        <a href="https://www.spid.gov.it">Maggiori informazioni</a>\
                    </li>\
                    <li class="spid-idp-support-link">\
                        <a href="https://www.spid.gov.it/richiedi-spid">Non hai SPID?</a>\
                    </li>\
                    <li class="spid-idp-support-link">\
                        <a href="https://www.spid.gov.it/serve-aiuto">Serve aiuto?</a>\
                    </li>\
                </ul>\
            </div>';
        $("#spid-prof-button").append(str_button);
        /* Random idp */
        var rootList = $("#spid-idp-list-medium-root-get");
        setTimeout(function() {
            //console.log("Completo bottone");
         },500);
        var idpList = rootList.children(".spid-idp-button-link");
        var lnkList = rootList.children(".spid-idp-support-link");
        while (idpList.length) {
            rootList.append(idpList.splice(Math.floor(Math.random() * idpList.length), 1)[0]);
        }
        rootList.append(lnkList);
        /* gestione click su idp con invio parametro per scelta idp SPID */
        $(".spid-idp-button-link a").on('click',function(event){
            event.stopImmediatePropagation();
            $(this).attr('disabled','disabled');
            event.preventDefault();
            let idp_val = $(this).parent().attr('data-idp');
            let url_redirect = window.location.origin+"/"+config.url+"?idp="+idp_val+"&tipo_accesso="+config.tipo_accesso;
            window.location.href = url_redirect;
        })
        $(".eidas-idp-button-link a").on('click',function(event){
            event.stopImmediatePropagation();
            $(this).attr('disabled','disabled');
            event.preventDefault();
            let idp_val = $(this).parent().attr('data-idp');
            let url_redirect = window.location.origin+"/"+config.url+"?idp="+idp_val;
            window.location.href = url_redirect;
        })
    };

    return {
        init: function (config) {

            // clone config as we are going to change it
            config = JSON.parse(JSON.stringify(config));

            // apply defaults
            for (var key in defaults)
                if (!(key in config))
                    config[key] = defaults[key];


            var spid = new spidObj(config);
            spid._render(config);
            return spid;
        }
    };
})();

