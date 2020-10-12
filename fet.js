/*
    => params.template structure:
    {
        lang: {
            pt: {
                home: "Início",
                about: "Sobre nós", ...
            },
            en: {
                home: "Home",
                about: "About", ...
            },
            es: {
                home: "Inicio",
                about: "Sobre Nosotros", ...
            }
        ... other langs ...
        }
    }
*/

function fet(params) {

    let defaultParams = {
        'url': false,
        'template': {},
        'where': document.body,
        'slug': 'lang',
        'lang': 'en', //default
        'fallback': 'en'
    }
    
    params = typeof params === 'object' ? fet.mergeObjects(defaultParams, params) : params;
    
    if (params.url) {
        if (location.pathname.match(params.url) === null) {
            return false;
        }
    }

    let list = [];
    
    if (params.where.DOCUMENT_NODE === document.DOCUMENT_NODE) {
        where = document;
    }

    where.childNodes.forEach(item => {
        let name = item.nodeName;
        if (name !== 'SCRIPT' && name !== 'STYLE') list.push(item); 
    });

    let availableWords = params.template[params.lang];

    if ( ! availableWords && (params.fallback)) {
        availableWords = params.template[params.fallback] || {};
    }

    Object.keys(availableWords).forEach(word => {
        list.map(node => fet.replaceInText(node, `{lang:${word}}`, availableWords[word]));
    }); 
    
}

fet.mergeObjects = function(defaultObj, toMergeObject) {
    Object.keys(toMergeObject).map(param => defaultObj[param] = toMergeObject[param]);
    return defaultObj;
};

fet.replaceInText = function (element, pattern, replacement) {
    for (let node of element.childNodes) {
        switch (node.nodeType) {
            case Node.ELEMENT_NODE:
                fet.replaceInText(node, pattern, replacement);
                break;
            case Node.TEXT_NODE:
                node.textContent = node.textContent.replace(pattern, replacement);
                break;
            case Node.DOCUMENT_NODE:
                fet.replaceInText(node, pattern, replacement);
        }
    }
};