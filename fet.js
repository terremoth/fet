/*
params: 
    => template structure:
    - {
        lang: {
            pt: {
                home: "Início",
                about: "Sobre nós",
                contact: "Contato",
                services: "Serviços",
                products: "Produtos",
                portifolio: "Portfólio",
                sustainability: "Sustentabilidade", 
                contactus: "Contate-nos",
                technology: "Tecnologia",
                login: "Entre",
                register: "Registre-se"
            },
            en: {
                home: "Home",
                about: "About",
                contact: "Contact",
                services: "Services",
                products: "Products",
                portifolio: "Portifolio",
                sustainability: "Sustainability", 
                contactus: "Contactus",
                technology: "Technology",
                login: "Login",
                register: "Register" 
            }
            es: {
                home: "Inicio",
                about: "Sobre Nosotros",
                contact: "Contacto",
                services: "Servicios",
                products: "Productos",
                portifolio: "Portifolio",
                sustainability: "Sustentabilidad", 
                contactus: "Contáctenos",
                technology: "Tecnología",
                login: "Iniciar Sesión",
                register: "Registrarse" 
            }
            ... other langs...
      }
    
    -  from: URL ou string
        - URL retornando json:
*/

export default function fet(params) {

    let defaultParams = {
        'from': undefined,
        'template': {},
        'where': document,
        'async': false,
        'localStore': true,
        'slug': 'lang',
        'lang': 'en', //default
        'detectLang': false
    }
    
    params = typeof params === 'object' ? fet.mergeObjects(defaultParams, params) : params;
    
    if (fet.isValidUrl(params.from)) {
        
        let request  = new XMLHttpRequest;
        let response = false;
        
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                params.template = fet.mergeObjects(params.template, JSON.parse(this.responseText));
                
                let nodesToSearchToReplace = params.where;
                
                if (typeof node === 'object') {
                    node = document.nodeName;
                }
                
                document.querySelectorAll();
                
                var parser = new window.DOMParser();
                var html = parser.parseFromString(, "text/html");
                where.innerHTML += html.body.innerHTML;
            }
        };
        
        request.open("GET", params.url, params.async);
        request.send();
    } elseif (typeof params.from === 'object') {
        
    }
    
    
    // change
    document.body.childNodes.forEach(item => {
        let name = item.nodeName;
        if (name !== 'SCRIPT' && name !== 'STYLE') list.push(item); 
    });

    Object.keys(words).forEach(word => {
        list.map(node => replaceInText(node, `{lang:${word}}`, words[word]));
    }); 
    
    
}

fet.isValidUrl = function(str) {
     var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
};

fet.mergeObjects = function(defaultObj, toMergeObject) {
    Object.keys(toMergeObject).map(param => defaultObj[param] = toMergeObject[param]);
    return defaultObj;
};

