const $ = require('jquery');

; (async () => {
    let body = $(document.body);
    let product = await $.getJSON('/api/v1/product');
    
    for(let data of product){
        let div = $(`<div class="p-2 text-white card m-4 bg-secondary">`);
        div.text(data.name);
        body.append(div);
    }

})()


