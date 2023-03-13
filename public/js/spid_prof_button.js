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

        // * spid-idps.js *
    // This script populate the SPID button with a remote json or the `idps` var content
    //var queryURL = "js/JSON_IDP_list_EXAMPLE.json";
    var queryURL = "https://registry.spid.gov.it/entities-idp?&output=json&custom=info_display_base";
    var idps = [{"organization_name": "ArubaPEC S.p.A.", "entity_id": "https://loginspid.aruba.it", "logo_uri": "img/spid-idp-arubaid.svg"},{"organization_name": "InfoCert S.p.A.", "entity_id": "https://identity.infocert.it", "logo_uri": "img/spid-idp-infocertid.svg"},{"organization_name": "IN.TE.S.A. S.p.A.", "entity_id": "https://spid.intesa.it", "logo_uri": "img/spid-idp-intesaid.svg"},{"organization_name": "Lepida S.p.A.", "entity_id": "https://id.lepida.it/idp/shibboleth", "logo_uri": "img/spid-idp-lepidaid.svg"},{"organization_name": "Namirial", "entity_id": "https://idp.namirialtsp.com/idp", "logo_uri": "img/spid-idp-namirialid.svg"},{"organization_name": "Poste Italiane SpA", "entity_id": "https://posteid.poste.it", "logo_uri": "img/spid-idp-posteid.svg"},{"organization_name": "Sielte S.p.A.", "entity_id": "https://identity.sieltecloud.it", "logo_uri": "img/spid-idp-sielteid.svg"},{"organization_name": "Register.it S.p.A.", "entity_id": "https://spid.register.it", "logo_uri": "img/spid-idp-spiditalia.svg"},{"organization_name": "TI Trust Technologies srl", "entity_id": "https://login.id.tim.it/affwebservices/public/saml2sso", "logo_uri": "img/spid-idp-timid.svg"},{"organization_name": "TeamSystem s.p.a.", "entity_id": "https://spid.teamsystem.com/idp", "logo_uri": "img/spid-idp-teamsystemid.svg"},{"organization_name": "EtnaHitech S.C.p.A.", "entity_id": "https://id.eht.eu", "logo_uri": "img/spid-idp-etnaid.svg"}]
    
    const entity_id_map = {"https://loginspid.aruba.it" : "arubaid","https://identity.infocert.it" : "infocert", "https://spid.intesa.it" : "intesa", "https://id.lepida.it/idp/shibboleth" : "lepida", "https://idp.namirialtsp.com/idp" : "namirialid", "https://posteid.poste.it": "poste", "https://identity.sieltecloud.it" : "sielte", "https://spid.register.it" : "spiditalia", "https://spid.teamsystem.com/idp" : "teamsystemid","https://login.id.tim.it/affwebservices/public/saml2sso" : "tim","https://id.eht.eu" : "etnahitech"}
    
    // spid_populate function, if '.spid-button[data-spid-remote] ul' exist, try to get the remote json file and pupulate all spid buttons
    function spid_populate(url_da_config,tipo_accesso_da_config) {
        let spid_elements = document.querySelectorAll('ul[data-spid-remote]')
        if (spid_elements.length > 0 ) {
        fetch(queryURL)
        .then(function (response) {
            return response.json();
            })
        .then(function (idps) {
            idps = idps.sort(() => Math.random() - 0.5)
            for (var u = 0; u < spid_elements.length; u++) {
            for (var i = 0; i < idps.length; i++) {spid_addIdpEntry(idps[i], spid_elements[u],url_da_config,tipo_accesso_da_config);}

            }
            })
        .catch(function (error) {
            console.log('Error during fetch: ' + error.message);
            idps.sort(() => Math.random() - 0.5)
            for (var u = 0; u < spid_elements.length; u++) {
            for (var i = 0; i < idps.length; i++) { spid_addIdpEntry(idps[i], spid_elements[u],url_da_config,tipo_accesso_da_config); }
            }
        });
        }
    }

    // function spid_addIdpEntry make a "li" element with the ipd link and prepend this in a element
    //
    // options:
    // - data - is an object with "organization_name", "entity_id" and "logo_uri" values
    // - element - is the element where is added the new "li" element
    function spid_addIdpEntry(data, element,url_da_config,tipo_accesso_da_config) {                  
        const att = document.createAttribute("data-idp");
        att.value = data['entity_id'];
        let li = document.createElement('li');
        li.className = 'spid-idp-button-link';
        li.setAttributeNode(att);
        if (element.id.indexOf('post')!== -1) {
            li.innerHTML = '<button class="idp-button-idp-logo" name="'+data['organization_name']+'" type="submit"><span class="spid-sr-only">'+data['organization_name']+'"</span><img class="spid-idp-button-logo" src="'+data['logo_uri']+'" alt="'+data['organization_name']+'" /></button></li>';
        };  
        if (element.id.indexOf('get')!== -1 || element.id.indexOf('prof')!== -1) {
            let param = entity_id_map[data['entity_id']]
            
            li.innerHTML = '<a href="'+window.location.origin+'/'+url_da_config+'?idp='+param+'&tipo_accesso='+tipo_accesso_da_config+'"><span class="spid-sr-only">'+data['organization_name']+'</span><img src="'+data['logo_uri']+'" alt="'+data['organization_name']+'" /></a>';
        };
        element.prepend(li)
    }

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
        
        str_button +=   '<a href="#" class="italia-it-button italia-it-button-size-m button-spid" spid-idp-button="#spid-idp-button-medium-get" aria-haspopup="true" aria-expanded="false">\
            <span class="italia-it-button-icon"><img src="'+config.path_img+'/spid-ico-circle-bb.svg"></span>\
            <span class="italia-it-button-text">Entra con SPID</span>\
        </a>\
        <div id="spid-idp-button-medium-get" class="spid-idp-button spid-idp-button-tip spid-idp-button-relative">\
            <ul id="spid-idp-list-medium-root-get" class="spid-idp-button-menu" data-spid-remote aria-labelledby="spid-idp">\
                <li><a class="dropdown-item" href="https://www.spid.gov.it">Maggiori informazioni</a></li>\
                <li><a class="dropdown-item" href="https://www.spid.gov.it/richiedi-spid">Non hai SPID?</a></li>\
                <li><a class="dropdown-item" href="https://www.spid.gov.it/serve-aiuto">Serve aiuto?</a></li>\
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

        /* attivo spid_populate per caricare lista bottoni */
        jQuery(function(){
            spid_populate(config.url,config.tipo_accesso);
        });

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

