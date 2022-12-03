window.onload = () => {
    render_items('is_new');
    render_items('is_sale');
}
function render_items(label){
    const product = new Product();
    let cardList = [];
    if(label == 'is_new'){
        cardList = product.findNewProduct();
    }
    else if(label == 'is_sale'){
        cardList = product.findSaleProduct();
    }
    let dom = '';
    for(let i=20; i> 10; i--){
        dom += `<div class="item col-6 col-sm-6 col-md-3 card">
        <div class="d-flex justify-content-between">
            ${cardList[i].newitem == true ? `
            <span class="bg-info rounded-circle d-flex justify-content-center align-items-center shadow-1-strong" style="width: 35px; height: 35px;">
                <p class="text-white mb-0 pb-0 small">New</p>
            </span>
            `: '<div style="width: 35px; height: 35px;" ></div>'}
            ${cardList[i].isale == true ? `
            <span class="bg-danger rounded-circle d-flex justify-content-center align-items-center shadow-1-strong" style="width: 35px; height: 35px;">
                <p class="text-white mb-0 pb-0 small">Sale</p>
            </span>
            `: '<div style="width: 35px; height: 35px;" ></div>'}
        </div>
        <div class="i">
            <a title="${cardList[i].nameCard}" href="#" onClick="showDetail('${cardList[i].id}');">
                <img class="lazy card-img-top pt-2" alt="${cardList[i].nameCard}" title="${cardList[i].nameCard}" src="${'https://hoayeuthuong.com/'+cardList[i].imageURL}" style="display: inline;">
            </a>
        </div>
        <div class="t pb-2 mt-3">
            <a class="text-muted small text-decoration-none" title="${cardList[i].nameCard}" href="#" href="#" onClick="showDetail('${cardList[i].id}');">${cardList[i].nameCard}</a>
            <span class="vn row">
                ${cardList[i].oldprice != '' ? `<p class="col-12 col-sm-6 mb-0 oprice small text-danger"><s>${cardList[i].oldprice}</s></p>`: ''}
                <p class="text-dark mb-0 small onew col-12 col-sm-6">${cardList[i].newprice}</p>
            </span>
        </div>
    </div>`;
    }
    document.getElementById(label).innerHTML = dom;
}

function showDetail(id){
    if(typeof window.localStorage['show'] != undefined){
        window.localStorage.removeItem('show');
    }
    window.localStorage.setItem('show',id);
    window.location.href = '../sanPham/chiTietSanPham.html';
}