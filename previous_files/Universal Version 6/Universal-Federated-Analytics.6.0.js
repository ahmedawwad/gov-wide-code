var oCONFIG = {
    // GWT_UAID: ["UA-33523145-1"],
    GWT_UAID: ["UA-188848967-2"],
    GWT_GA4ID: "G-TBE5K6NB2T",
    FORCE_SSL: !0,
    ANONYMIZE_IP: !0,
    AGENCY: "",
    SUB_AGENCY: "",
    VERSION: "20210628 v6.0 - Universal Analytics",
    SITE_TOPIC: "",
    SITE_PLATFORM: "",
    SCRIPT_SOURCE: "",
    URL_PROTOCOL: location.protocol,
    USE_MAIN_CUSTOM_DIMENSIONS: !0,
    MAIN_AGENCY_CUSTOM_DIMENSION_SLOT: "dimension1",
    MAIN_SUBAGENCY_CUSTOM_DIMENSION_SLOT: "dimension2",
    MAIN_CODEVERSION_CUSTOM_DIMENSION_SLOT: "dimension3",
    MAIN_SITE_TOPIC_CUSTOM_DIMENSION_SLOT: "dimension4",
    MAIN_SITE_PLATFORM_CUSTOM_DIMENSION_SLOT: "dimension5",
    MAIN_SCRIPT_SOURCE_URL_CUSTOM_DIMENSION_SLOT: "dimension6",
    MAIN_URL_PROTOCOL_CUSTOM_DIMENSION_SLOT: "dimension7",
    MAIN_INTERACTION_TYPE_CUSTOM_DIMENSION_SLOT: "dimension8",
    USE_PARALLEL_CUSTOM_DIMENSIONS: !1,
    PARALLEL_AGENCY_CUSTOM_DIMENSION_SLOT: "dimension1",
    PARALLEL_SUBAGENCY_CUSTOM_DIMENSION_SLOT: "dimension2",
    PARALLEL_CODEVERSION_CUSTOM_DIMENSION_SLOT: "dimension3",
    PARALLEL_SITE_TOPIC_CUSTOM_DIMENSION_SLOT: "dimension4",
    PARALLEL_SITE_PLATFORM_CUSTOM_DIMENSION_SLOT: "dimension5",
    PARALLEL_SCRIPT_SOURCE_URL_CUSTOM_DIMENSION_SLOT: "dimension6",
    PARALLEL_URL_PROTOCOL_CUSTOM_DIMENSION_SLOT: "dimension7",
    PARALLEL_INTERACTION_TYPE_CUSTOM_DIMENSION_SLOT: "dimension8",
    COOKIE_DOMAIN: location.hostname.replace("www.", "").toLowerCase(),
    COOKIE_TIMEOUT: 63072E3,
    SEARCH_PARAMS: "q|querytext|nasaInclude|k|qt",
    YOUTUBE: !1,
    AUTOTRACKER: !0,
    EXTS: "doc|docx|xls|xlsx|xlsm|ppt|pptx|exe|zip|pdf|js|txt|csv|dxf|dwgd|rfa|rvt|dwfx|dwg|wmv|jpg|msi|7z|gz|tgz|wma|mov|avi|mp3|mp4|csv|mobi|epub|swf|rar",
    SUBDOMAIN_BASED: !0,
    DOUBLECLICK_LINK: !1,
    ENHANCED_LINK: !1,
    OPTOUT_PAGE: !1,
    TRANSPORT: "xhr",
    PUA_NAME: "GSA_ENOR"
};


var script = document.createElement('script');
script.src = "https://www.googletagmanager.com/gtag/js?id="+oCONFIG.GWT_GA4ID;
document.getElementsByTagName('head')[0].appendChild(script);
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

function _onEveryPage() {
    _updateConfig();
    _defineCookieDomain();
    _defineAgencyCDsValues()
}
_onEveryPage();

function _defineCookieDomain() {
    /(([^.\/]+\.[^.\/]{2,3}\.[^.\/]{2})|(([^.\/]+\.)[^.\/]{2,4}))(\/.*)?$/.test(oCONFIG.SUBDOMAIN_BASED.toString()) ? (oCONFIG.COOKIE_DOMAIN = oCONFIG.SUBDOMAIN_BASED.toLowerCase().replace("www.", ""), oCONFIG.SUBDOMAIN_BASED = !0) : !1 === oCONFIG.SUBDOMAIN_BASED ? (oCONFIG.COOKIE_DOMAIN = document.location.hostname.match(/(([^.\/]+\.[^.\/]{2,3}\.[^.\/]{2})|(([^.\/]+\.)[^.\/]{2,4}))(\/.*)?$/)[1], oCONFIG.SUBDOMAIN_BASED = !0) : (oCONFIG.COOKIE_DOMAIN = location.hostname.toLowerCase().replace("www.",
        ""), oCONFIG.SUBDOMAIN_BASED = !1)
}

function _defineAgencyCDsValues() {
    oCONFIG.AGENCY = oCONFIG.AGENCY || "unspecified:" + oCONFIG.COOKIE_DOMAIN;
    oCONFIG.SUB_AGENCY = oCONFIG.SUB_AGENCY || "" + oCONFIG.COOKIE_DOMAIN;
    oCONFIG.SUB_AGENCY = oCONFIG.AGENCY + " - " + oCONFIG.SUB_AGENCY;
    oCONFIG.SITE_TOPIC = oCONFIG.SITE_TOPIC || "unspecified:" + oCONFIG.COOKIE_DOMAIN;
    oCONFIG.SITE_PLATFORM = oCONFIG.SITE_PLATFORM || "unspecified:" + oCONFIG.COOKIE_DOMAIN
}

function _cleanBooleanParam(a) {
    switch (a.toString().toLowerCase()) {
        case "true":
        case "on":
        case "yes":
        case "1":
            return !0;
        case "false":
        case "off":
        case "no":
        case "0":
            return !1;
        default:
            return a
    }
}

function _isValidUANum(a) {
    a = a.toLowerCase();
    a = a.match(/^ua\-([0-9]+)\-[0-9]+$/);
    return null != a && 0 < a.length
}

function _cleanDimensionValue(a) {
    try {
        pattern = /^dimension([1-9]|[1-9][0-9]|1([0-9][0-9])|200)$/;
        if (pattern.test(a)) return a;
        if (null !== a.match(/\d+$/g)) {
            var b = "dimension" + a.match(/\d+$/g)[0];
            if (pattern.test(b)) return b
        }
        return ""
    } catch (c) {}
}

function _updateConfig() {
    if ("undefined" !== typeof _fedParmsGTM) {
        var a = _fedParmsGTM.toLowerCase().split("&");
        oCONFIG.SCRIPT_SOURCE = "GTM"
    } else {
       // var my_awesome_script = document.createElement('script');
       // my_awesome_script.setAttribute('id','_fed_an_ua_tag');
       // my_awesome_script.setAttribute('src','https://bigwes.com/'); //********** COME BACK & HANDLE
       // document.head.appendChild(my_awesome_script);
        
        var b = document.getElementById("_fed_an_ua_tag");
        _fullParams = b.src.match(/^([^\?]*)(.*)$/i)[2].replace("?", "");
        a = _fullParams.split("&");
        oCONFIG.SCRIPT_SOURCE = b.src.split("?")[0]
    }
    for (b = 0; b < a.length; b++) switch (_keyValuePair = decodeURIComponent(a[b].toLowerCase()), _key = _keyValuePair.split("=")[0], _value = _keyValuePair.split("=")[1], _key) {
        case "pua":
            for (var c = _value.split(","),
                    d = 0; d < c.length; d++) _isValidUANum(c[d]) && oCONFIG.GWT_UAID.push(c[d].toUpperCase());
            break;
        case "agency":
            oCONFIG.AGENCY = _value.toUpperCase();
            break;
        case "subagency":
            oCONFIG.SUB_AGENCY = _value.toUpperCase();
            break;
        case "sitetopic":
            oCONFIG.SITE_TOPIC = _value;
            break;
        case "siteplatform":
            oCONFIG.SITE_PLATFORM = _value;
            break;
        case "parallelcd":
            _value = _cleanBooleanParam(_value);
            if (!0 === _value || !1 === _value) oCONFIG.USE_PARALLEL_CUSTOM_DIMENSIONS = _value;
            break;
        case "palagencydim":
            _value = _cleanDimensionValue(_value);
            "" !==
            _value && (oCONFIG.PARALLEL_AGENCY_CUSTOM_DIMENSION_SLOT = _value);
            break;
        case "palsubagencydim":
            _value = _cleanDimensionValue(_value);
            "" !== _value && (oCONFIG.PARALLEL_SUBAGENCY_CUSTOM_DIMENSION_SLOT = _value);
            break;
        case "palversiondim":
            _value = _cleanDimensionValue(_value);
            "" !== _value && (oCONFIG.PARALLEL_CODEVERSION_CUSTOM_DIMENSION_SLOT = _value);
            break;
        case "paltopicdim":
            _value = _cleanDimensionValue(_value);
            "" !== _value && (oCONFIG.PARALLEL_SITE_TOPIC_CUSTOM_DIMENSION_SLOT = _value);
            break;
        case "palplatformdim":
            _value =
                _cleanDimensionValue(_value);
            "" !== _value && (oCONFIG.PARALLEL_SITE_PLATFORM_CUSTOM_DIMENSION_SLOT = _value);
            break;
        case "palscriptsrcdim":
            _value = _cleanDimensionValue(_value);
            "" !== _value && (oCONFIG.PARALLEL_SCRIPT_SOURCE_URL_CUSTOM_DIMENSION_SLOT = _value);
            break;
        case "palurlprotocoldim":
            _value = _cleanDimensionValue(_value);
            "" !== _value && (oCONFIG.PARALLEL_URL_PROTOCOL_CUSTOM_DIMENSION_SLOT = _value);
            break;
        case "palinteractiontypedim":
            _value = _cleanDimensionValue(_value);
            "" !== _value && (oCONFIG.PARALLEL_INTERACTION_TYPE_CUSTOM_DIMENSION_SLOT =
                _value);
            break;
        case "cto":
            oCONFIG.COOKIE_TIMEOUT = 2628E3 * parseInt(_value);
            break;
        case "sp":
            oCONFIG.SEARCH_PARAMS += "|" + _value.replace(/,/g, "|");
            break;
        case "exts":
            oCONFIG.EXTS += "|" + _value.replace(/,/g, "|");
            break;
        case "yt":
            _value = _cleanBooleanParam(_value);
            if (!0 === _value || !1 === _value) oCONFIG.YOUTUBE = _value;
            break;
        case "autotracker":
            _value = _cleanBooleanParam(_value);
            if (!0 === _value || !1 === _value) oCONFIG.AUTOTRACKER = _value;
            break;
        case "sdor":
            oCONFIG.SUBDOMAIN_BASED = _cleanBooleanParam(_value);
            break;
        case "dclink":
            _value =
                _cleanBooleanParam(_value);
            if (!0 === _value || !1 === _value) oCONFIG.DOUBLECLICK_LINK = _value;
            break;
        case "enhlink":
            _value = _cleanBooleanParam(_value);
            if (!0 === _value || !1 === _value) oCONFIG.ENHANCED_LINK = _value;
            break;
        case "optout":
            _value = _cleanBooleanParam(_value);
            if (!0 === _value || !1 === _value) oCONFIG.OPTOUT_PAGE = _value;
            break;
        case "transport":
            if ("xhr" === _value || "beacon" === _value || "image" === _value) oCONFIG.TRANSPORT = _value
    }
}

function _sendCustomDimensions(a, b) {
    if (0 < a.length && "" !== b && void 0 !== b) {
        tObjectCheck !== window.GoogleAnalyticsObject && createTracker(!1);
        for (var c = 0; c < oCONFIG.GWT_UAID.length; c++)
            if ("dimension0" !== a[c]) try {
                window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + c + ".set", a[c], b)
            } catch (d) {}
    }
}

function _sendCustomMetrics(a, b) {
    if (0 < a.length && "" !== b && void 0 !== b) {
        tObjectCheck != window.GoogleAnalyticsObject && createTracker(!1);
        for (var c = 0; c < oCONFIG.GWT_UAID.length; c++)
            if ("metric0" !== a[c]) try {
                window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + c + ".set", a[c], b)
            } catch (d) {}
    }
}

function _sendEvent(a, b, c, d, f, e) {
    if ("" !== a && void 0 !== a && "" !== b && void 0 !== b) {
        var h = oCONFIG.MAIN_INTERACTION_TYPE_CUSTOM_DIMENSION_SLOT;
        tObjectCheck !== window.GoogleAnalyticsObject && createTracker(!1);
        for (var g = 0; g < oCONFIG.GWT_UAID.length; g++) try {
            0 < g && (!0 === oCONFIG.USE_PARALLEL_CUSTOM_DIMENSIONS ? h = oCONFIG.PARALLEL_INTERACTION_TYPE_CUSTOM_DIMENSION_SLOT : e = void 0), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + g + ".set", h, e), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + g + ".send", "event",
                a, b, void 0 !== c ? c : "", "" === d && isNaN(d) && void 0 === d ? 0 : parseInt(d), {
                    nonInteraction: f
                })
            
            gtag('event', a.toLowerCase(), {
                'event_action': b.toLowerCase(),
                'event_label': c.toLowerCase(),
                'agency': oCONFIG.AGENCY.toLowerCase(),
                'subagency': oCONFIG.SUB_AGENCY.toLowerCase(),
                'version': oCONFIG.VERSION,
                'site_topic': oCONFIG.SITE_TOPIC.toLowerCase(),
                'site_platform': oCONFIG.SITE_PLATFORM.toLowerCase(),
                'script_source': oCONFIG.SCRIPT_SOURCE.toLowerCase(),
                'url_protocol': oCONFIG.URL_PROTOCOL.toLowerCase()
            });
        } catch (k) {}
    }
}

function _sendCustomEvent(a, b, c, d, f, e) {
    if ("" !== a && void 0 !== a && "" !== b && void 0 !== b) {
        var h = oCONFIG.MAIN_INTERACTION_TYPE_CUSTOM_DIMENSION_SLOT;
        tObjectCheck !== window.GoogleAnalyticsObject && createTracker(!1);
        for (var g = 0; g < oCONFIG.GWT_UAID.length; g++) try {
            0 < g && (!0 === oCONFIG.USE_PARALLEL_CUSTOM_DIMENSIONS ? h = oCONFIG.PARALLEL_INTERACTION_TYPE_CUSTOM_DIMENSION_SLOT : e = void 0), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + g + ".set", h, e), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + g + ".send", "event",
                a, b, void 0 !== c ? c : "", "" === d && isNaN(d) && void 0 === d ? 0 : parseInt(d), {
                    nonInteraction: f
                })
            
            gtag('event', 'dap_event', {
                'event_category': a.toLowerCase(),
                'event_action': b.toLowerCase(),
                'event_label': c.toLowerCase(),
                'agency': oCONFIG.AGENCY.toLowerCase(),
                'subagency': oCONFIG.SUB_AGENCY.toLowerCase(),
                'version': oCONFIG.VERSION,
                'site_topic': oCONFIG.SITE_TOPIC.toLowerCase(),
                'site_platform': oCONFIG.SITE_PLATFORM.toLowerCase(),
                'script_source': oCONFIG.SCRIPT_SOURCE.toLowerCase(),
                'url_protocol': oCONFIG.URL_PROTOCOL.toLowerCase()
            });
        } catch (k) {}
    }
}

function _sendPageview(a, b) {
    if ("" !== a && void 0 !== a) {
        tObjectCheck !== window.GoogleAnalyticsObject && createTracker(!1);
        for (var c = 0; c < oCONFIG.GWT_UAID.length; c++) try {
            window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + c + ".send", "pageview", {
                page: a,
               title: "" !== b || void 0 !== b ? b : document.title
            })
            
            gtag('config', oCONFIG.GWT_GA4ID, {
                'agency': oCONFIG.AGENCY.toLowerCase(),
                'subagency': oCONFIG.SUB_AGENCY.toLowerCase(),
                'version': oCONFIG.VERSION,
                'site_topic': oCONFIG.SITE_TOPIC.toLowerCase(),
                'site_platform': oCONFIG.SITE_PLATFORM.toLowerCase(),
                'script_source': oCONFIG.SCRIPT_SOURCE.toLowerCase(),
                'url_protocol': oCONFIG.URL_PROTOCOL.toLowerCase()
            });
        } catch (d) {}
    }
}

function gas(a, b, c, d, f, e, h) {
    if (void 0 !== a && "" !== a && void 0 !== b && "" !== b && void 0 !== c && "" !== c)
        if ("pageview" === b.toLowerCase()) try {
            _sendPageview(c, void 0 === d || "" === d ? document.title : d)
        } catch (n) {} else if ("event" === b.toLowerCase() && void 0 !== d && "" !== d) try {
            var g = !1;
            void 0 !== h && "boolean" === typeof _cleanBooleanParam(h) && (g = _cleanBooleanParam(h));
            _sendCustomEvent(c, d, void 0 === f ? "" : f, void 0 === e || "" === e || isNaN(e) ? 0 : parseInt(e), g)
        } catch (n) {} else if (-1 != b.toLowerCase().indexOf("dimension")) try {
            g = b.toLowerCase().split(",");
            var k = [];
            dimsPattern = /^dimension([1-9]|[1-9][0-9]|1([0-9][0-9])|200)$/;
            for (var l = 0; l < g.length; l++)
                if (dimsPattern.test(g[l])) k.push(g[l]);
                else {
                    var m = "dimension" + g[l].match(/\d+$/g)[0];
                    (dimsPattern.test(m) || "dimension0" === m) && k.push(m)
                } 0 < k.length && _sendCustomDimensions(k, void 0 === c ? "" : c)
        } catch (n) {} else if (-1 != b.toLowerCase().indexOf("metric")) try {
            k = b.toLowerCase().split(",");
            g = [];
            mtrcsPattern = /^metric([1-9]|[1-9][0-9]|1([0-9][0-9])|200)$/;
            for (m = 0; m < k.length; m++) mtrcsPattern.test(k[m]) ? g.push(k[m]) :
                (l = "metric" + k[m].match(/\d+$/g)[0], (mtrcsPattern.test(l) || "metric0" === l) && g.push(l));
            0 < g.length && _sendCustomMetrics(g, void 0 === c || "" === c || isNaN(c) ? 1 : parseFloat(c))
        } catch (n) {}
}

function _URIHandler(a) {
    var b = new RegExp("([?&])(" + oCONFIG.SEARCH_PARAMS + ")(=[^&]*)", "i");
    b.test(a) && (a = a.replace(b, "$1query$3"));
    return a
}

function _isExcludedReferrer() {
    if ("" !== document.referrer) {
        var a = document.referrer.replace(/https?:\/\//, "").split("/")[0].replace("www.", "");
        return oCONFIG.SUBDOMAIN_BASED ? -1 != a.indexOf(oCONFIG.COOKIE_DOMAIN) ? !0 : !1 : a === oCONFIG.COOKIE_DOMAIN ? !0 : !1
    }
}
var tObjectCheck;
"undefined" === typeof window.GoogleAnalyticsObject && function(a, b, c, d, f, e, h) {
    a.GoogleAnalyticsObject = f;
    a[f] = a[f] || function() {
        (a[f].q = a[f].q || []).push(arguments)
    };
    a[f].l = 1 * new Date;
    e = b.createElement(c);
    h = b.getElementsByTagName(c)[0];
    e.async = 1;
    e.src = d;
    h.parentNode.insertBefore(e, h)
}(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga");

tObjectCheck = window.GoogleAnalyticsObject;
createTracker(!0);

function createTracker(a) {
    for (var b = 0; b < oCONFIG.GWT_UAID.length; b++) {
        var c = _URIHandler(document.location.pathname + document.location.search + document.location.hash);
        oCONFIG.OPTOUT_PAGE && (window["ga-disable-" + oCONFIG.GWT_UAID[b]] = !0);
        window[window.GoogleAnalyticsObject]("create", oCONFIG.GWT_UAID[b], oCONFIG.COOKIE_DOMAIN, {
            name: oCONFIG.PUA_NAME + b,
            allowLinker: !0,
            cookieExpires: parseInt(oCONFIG.COOKIE_TIMEOUT)
        });
        if (oCONFIG.TRANSPORT) window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + b + ".set", "transport",
            oCONFIG.TRANSPORT);
        if (oCONFIG.ANONYMIZE_IP) window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + b + ".set", "anonymizeIp", oCONFIG.ANONYMIZE_IP);
        if (oCONFIG.DOUBLECLICK_LINK) window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + b + ".require", "displayfeatures");
        if (oCONFIG.ENHANCED_LINK) window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + b + ".require", "linkid", "linkid.js");
        if (oCONFIG.FORCE_SSL) window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + b + ".set", "forceSSL", !0);
        if (_isExcludedReferrer()) window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME +
            b + ".set", "referrer", "");
        oCONFIG.USE_MAIN_CUSTOM_DIMENSIONS && 0 === b && (window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + b + ".set", oCONFIG.MAIN_AGENCY_CUSTOM_DIMENSION_SLOT, oCONFIG.AGENCY), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + b + ".set", oCONFIG.MAIN_SUBAGENCY_CUSTOM_DIMENSION_SLOT, oCONFIG.SUB_AGENCY), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + b + ".set", oCONFIG.MAIN_CODEVERSION_CUSTOM_DIMENSION_SLOT, oCONFIG.VERSION), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + b + ".set",
            oCONFIG.MAIN_SITE_TOPIC_CUSTOM_DIMENSION_SLOT, oCONFIG.SITE_TOPIC), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + b + ".set", oCONFIG.MAIN_SITE_PLATFORM_CUSTOM_DIMENSION_SLOT, oCONFIG.SITE_PLATFORM), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + b + ".set", oCONFIG.MAIN_SCRIPT_SOURCE_URL_CUSTOM_DIMENSION_SLOT, oCONFIG.SCRIPT_SOURCE), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + b + ".set", oCONFIG.MAIN_URL_PROTOCOL_CUSTOM_DIMENSION_SLOT, oCONFIG.URL_PROTOCOL));
        oCONFIG.USE_PARALLEL_CUSTOM_DIMENSIONS &&
            0 < b && (window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + b + ".set", oCONFIG.PARALLEL_AGENCY_CUSTOM_DIMENSION_SLOT, oCONFIG.AGENCY), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + b + ".set", oCONFIG.PARALLEL_SUBAGENCY_CUSTOM_DIMENSION_SLOT, oCONFIG.SUB_AGENCY), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + b + ".set", oCONFIG.PARALLEL_CODEVERSION_CUSTOM_DIMENSION_SLOT, oCONFIG.VERSION), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + b + ".set", oCONFIG.PARALLEL_SITE_TOPIC_CUSTOM_DIMENSION_SLOT,
                oCONFIG.SITE_TOPIC), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + b + ".set", oCONFIG.PARALLEL_SITE_PLATFORM_CUSTOM_DIMENSION_SLOT, oCONFIG.SITE_PLATFORM), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + b + ".set", oCONFIG.PARALLEL_SCRIPT_SOURCE_URL_CUSTOM_DIMENSION_SLOT, oCONFIG.SCRIPT_SOURCE), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + b + ".set", oCONFIG.PARALLEL_URL_PROTOCOL_CUSTOM_DIMENSION_SLOT, oCONFIG.URL_PROTOCOL)); - 1 !== document.title.search(/404|not found/i) && (c = ("/vpv404/" +
            c).replace(/\/\//g, "/") + "/" + document.referrer);
        if (a) {
            window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + b + ".send", "pageview", c);

            gtag('config', oCONFIG.GWT_GA4ID, {
                'agency': oCONFIG.AGENCY.toLowerCase(),
                'subagency': oCONFIG.SUB_AGENCY.toLowerCase(),
                'version': oCONFIG.VERSION,
                'site_topic': oCONFIG.SITE_TOPIC.toLowerCase(),
                'site_platform': oCONFIG.SITE_PLATFORM.toLowerCase(),
                'script_source': oCONFIG.SCRIPT_SOURCE.toLowerCase(),
                'url_protocol': oCONFIG.URL_PROTOCOL.toLowerCase()
            });
        }
    }
}

function _initAutoTracker(a) {
    var b = oCONFIG.COOKIE_DOMAIN,
        c = oCONFIG.EXTS.split("|");
    a = a || document.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        var d = 0,
            f = "",
            e = /^mailto:[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/i,
            h = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i,
            g = /^(tel:)(.*)$/i;
        if (e.test(a[i].href) || h.test(a[i].href) || g.test(a[i].href)) {
            try {
                h.test(a[i].href) ? f = a[i].hostname.toLowerCase().replace("www.", "") : e.test(a[i].href) ? f = a[i].href.split("@")[1].toLowerCase() :
                    g.test(a[i].href) && (f = a[i].href, f = f.toLowerCase())
            } catch (k) {
                continue
            }
            if (oCONFIG.SUBDOMAIN_BASED ? -1 !== f.indexOf(b) : f === b)
                if (-1 !== a[i].href.toLowerCase().indexOf("mailto:") && -1 === a[i].href.toLowerCase().indexOf("tel:")) e = a[i].href.match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/), _tagClicks(a[i], "Mailto", e[0], "", 0);
                else if (-1 === a[i].href.toLowerCase().indexOf("mailto:") && -1 !== a[i].href.toLowerCase().indexOf("tel:")) _tagClicks(a[i], "Telephone Clicks", a[i].href.split("tel:")[1], "", 0);
            else {
                if (-1 ===
                    a[i].href.toLowerCase().indexOf("mailto:") && -1 === a[i].href.toLowerCase().indexOf("tel:"))
                    for (d = 0; d < c.length; d++)
                        if (e = a[i].href.split("."), e = e[e.length - 1].split(/[#?&?]/), e[0].toLowerCase() === c[d]) {
                            _tagClicks(a[i], "Download", e[0].toLowerCase(), a[i].href.split(/[#?&?]/)[0], 0);
                            break
                        }
            } else
                for (f = 0; f < c.length; f++)
                    if (e = a[i].href.split("."), e = e[e.length - 1].split(/[#?]/), e[0].toLowerCase() === c[f]) {
                        a[i].href.split(c[f]);
                        _tagClicks(a[i], "Outbound Downloads", e[0].toLowerCase(), a[i].href.split(/[#?&?]/)[0], 0);
                        break
                    } else e[0].toLowerCase() !== c[f] && (d++, d === c.length && (-1 === a[i].href.toLowerCase().indexOf("mailto:") && -1 === a[i].href.toLowerCase().indexOf("tel:") ? _tagClicks(a[i], "Outbound", a[i].hostname, a[i].pathname, 0) : c.length && -1 !== a[i].href.toLowerCase().indexOf("mailto:") && -1 === a[i].href.toLowerCase().indexOf("tel:") ? (e = a[i].href.match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/i), _tagClicks(a[i], "Outbound MailTo", e[0], "", 0)) : c.length && -1 === a[i].href.toLowerCase().indexOf("mailto:") && -1 !== a[i].href.toLowerCase().indexOf("tel:") &&
                        _tagClicks(a[i], "Telephone Clicks", a[i].href.split("tel:")[1], "", 0)))
        }
    }
}

if (oCONFIG.YOUTUBE) {
    var videoArray_fed = [],
        playerArray_fed = [],
        _f33 = !1,
        _f66 = !1,
        _f90 = !1,
        tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var youtube_parser_fed = function(a) {
            if ((a = a.match(/^(https?:)?(\/\/)?(www\.)?(youtu\.be\/|youtube(\-nocookie)?\.([A-Za-z]{2,4}|[A-Za-z]{2,3}\.[A-Za-z]{2})\/)(watch|embed\/|vi?\/)?(\?vi?=)?([^#&\?\/]{11}).*$/)) && 11 ===
                a[9].length) return a[9]
        },
        IsYouTube_fed = function(a) {
            return /^(https?:)?(\/\/)?(www\.)?(youtu\.be\/|youtube(\-nocookie)?\.([A-Za-z]{2,4}|[A-Za-z]{2,3}\.[A-Za-z]{2})\/)(watch|embed\/|vi?\/)?(\?vi?=)?([^#&\?\/]{11}).*$/.test(a.toString()) ? !0 : !1
        },
        YTUrlHandler_fed = function(a) {
            a = a.replace(/origin=(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})&?/ig, "origin=" + document.location.protocol + "//" + document.location.host);
            stAdd = "";
            adFlag = !1; - 1 === a.indexOf("https") && (a = a.replace("http", "https")); - 1 === a.indexOf("?") && (stAdd =
                "?flag=1"); - 1 === a.indexOf("enablejsapi") && (stAdd += "&enablejsapi=1", adFlag = !0); - 1 === a.indexOf("html5") && (stAdd += "&html5=1", adFlag = !0); - 1 === a.indexOf("origin") && (stAdd += "&origin=" + document.location.protocol + "//" + document.location.host, adFlag = !0);
            return !0 === adFlag ? a + stAdd : a
        },
        _initYouTubeTracker = function() {
            for (var a = document.getElementsByTagName("iframe"), b = 0, c = 0; c < a.length; c++) {
                _thisVideoObj = a[c];
                var d = _thisVideoObj.src;
                IsYouTube_fed(d) && (_thisVideoObj.src = YTUrlHandler_fed(d), d = youtube_parser_fed(d),
                    _thisVideoObj.setAttribute("id", d), videoArray_fed[b] = d, b++)
            }
        },
        onYouTubePlayerAPIReady = function() {
            for (var a = 0; a < videoArray_fed.length; a++) playerArray_fed[a] = new YT.Player(videoArray_fed[a], {
                events: {
                    onReady: onFedPlayerReady,
                    onStateChange: onFedPlayerStateChange
                }
            })
        },
        onFedPlayerReady = function(a) {},
        onFedPlayerStateChange = function(a) {
            var b = a.target.getIframe().getAttribute("src");
            youtube_parser_fed(b);
            _thisDuration = (parseInt(a.target.getCurrentTime()) / parseInt(a.target.getDuration()) * 100).toFixed();
            "undefined" !==
            typeof onPlayerStateChange && onPlayerStateChange(a);
            parseInt(a.data) === parseInt(YT.PlayerState.PLAYING) ? (0 === _thisDuration && (_f90 = _f66 = _f33 = !1), _sendEvent("YouTube Video", "play", b, 0)) : a.data === YT.PlayerState.ENDED ? _sendEvent("YouTube Video", "finish", b, 0) : a.data === YT.PlayerState.PAUSED && (_sendEvent("YouTube Video", "pause", b, 0), 100 > _thisDuration && (a = _thisDuration, 0 < a && 33 >= a && !1 === _f33 ? (_sendEvent("YouTube Video", "33%", b, 0), _f33 = !0) : 33 < a && 66 >= a && !1 === _f66 ? (_sendEvent("YouTube Video", "66%", b, 0), _f66 = !0) :
                66 < a && 90 >= a && !1 === _f90 && (_sendEvent("YouTube Video", "90%", b, 0), _f90 = !0)))
        }
}

function _initIdAssigner() {
    for (var a = document.getElementsByTagName("a"), b = 0; b < a.length; b++) {
        var c = a[b].getAttribute("id");
        null !== c && "" !== c && void 0 !== c || a[b].setAttribute("id", "anch_" + b)
    }
}

function _tagClicks(a, b, c, d, f) {
    a.addEventListener ? (a.addEventListener("mousedown", function() {
        _sendEvent(b, c, d, f, !1, "Mouse Click")
    }), a.addEventListener("keydown", function(a) {
        13 === a.keyCode && _sendEvent(b, c, d, f, !1, "Enter Key Keystroke")
    })) : a.attachEvent && (a.attachEvent("onmousedown", function() {
        _sendEvent(b, c, d, f, !1, "Mouse Click")
    }), a.attachEvent("onkeydown", function(a) {
        13 === a.keyCode && _sendEvent(b, c, d, f, !1, "Enter Key Keystroke")
    }))
}

function _setUpTrackers() {
    tObjectCheck !== window.GoogleAnalyticsObject && createTracker(!1);
    oCONFIG.ENHANCED_LINK ? _initIdAssigner() : "";
    oCONFIG.AUTOTRACKER ? _initAutoTracker() : "";
    oCONFIG.YOUTUBE ? _initYouTubeTracker() : ""
}

function _setUpTrackersIfReady() {
    return "interactive" === document.readyState || "complete" === document.readyState ? (_setUpTrackers(), !0) : !1
}
_setUpTrackersIfReady() || (document.addEventListener ? document.addEventListener("DOMContentLoaded", _setUpTrackers) : document.attachEvent && document.attachEvent("onreadystatechange", _setUpTrackersIfReady));

//# sourceMappingURL=Federated.js.map
