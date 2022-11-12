window.onload = () => {
    responsive();
};
window.addEventListener('resize', function(){
    responsive();
})
$('.model_dark').on("click", function(){
    CloseNav();
});
function responsive(){
    let width = window.innerWidth;
    if(width <= 920){
        $('.filter_items').removeClass('d-none');
        $('#left-menu').removeClass('col-sm-3');
        $('#content-items').addClass('col-sm-12');
        $('#content-items').removeClass('col-sm-9');
        $('#left-menu').removeClass('col-sm-3');
    }else{
        $('.filter_items').addClass('d-none');
        if(!$('#left-menu').hasClass('col-sm-3')){
            $('#left-menu').addClass('col-sm-3');
        }
        if(!$('#content-items').hasClass('col-sm-9') && $('#content-items').hasClass('col-sm-12')){
            $('#content-items').removeClass('col-sm-12');
            $('#content-items').addClass('col-sm-9');
        }
    }
}
function CloseNav(){
    $('.model_dark').removeClass('modal-overlay');
    $('#left-menu').css('width','0px');
    $('#left-menu').css('padding','0px');
    $('.close_nav').addClass('d-none');
}
function toggler_menu(){
  if($('#left-menu').css('width') == '0px'){// chua toggle
     $('#left-menu').css('width','250px');
     $('#left-menu').css('padding','10px');
     $('.close_nav').removeClass('d-none');
     $('.model_dark').addClass('modal-overlay');
  }else{
    CloseNav();
  }
}
let filter_list = [];
let price = "";
let current = 32;
let lenght_products = 0;
function render_items(index){
    const product = new Product();
    let cardList = product.filterProduct(filter_list);
    if(price != ""){
        let min = price.split('-')[0];
        let max = price.split('-')[1];
        cardList = product.findPrice(min, max, cardList);
    }
    lenght_products = cardList.length;
    let length = cardList.length > index ? index : cardList.length;
    current = length;
    if(cardList != []){
        document.getElementById('data_items').innerHTML = '';
        let dom = '';
        for(let i=0; i< length; i++){
            dom +=`<div class="item col-6 col-sm-3 card">
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
                            <a title="${cardList[i].nameCard}" href="${'./chitietsanpham.html/'+cardList[i].id}">
                                <img class="lazy card-img-top pt-2" alt="${cardList[i].nameCard}" title="${cardList[i].nameCard}" src="${'https://hoayeuthuong.com/'+cardList[i].imageURL}" style="display: inline;">
                            </a>
                        </div>
                        <div class="t pb-2 mt-3">
                            <a class="text-muted small text-decoration-none" title="${cardList[i].nameCard}" href="${'./chitietsanpham.html/'+cardList[i].id}">${cardList[i].nameCard}</a>
                            <span class="vn row">
                                ${cardList[i].oldprice != '' ? `<p class="col-12 col-sm-6 mb-0 oprice small text-danger"><s>${cardList[i].oldprice}</s></p>`: ''}
                                <p class="text-dark mb-0 small onew col-12 col-sm-6">${cardList[i].newprice}</p>
                            </span>
                        </div>
                    </div>`;
        }
        document.getElementById('data_items').innerHTML = dom;
    }
}
function resetCount(){
    current = 32;
    lenght_products = 0;
    if(lenght_products == 0){
        $('.more').text(`Xem thêm sảm phẩm còn lại`);
    }
}
function ChangeState(data, id){
    resetCount();
    $('#intro').addClass('d-none'); // process intro disappear when render data_items
    if($('#'+id).is(':checked')){
        if(!filter_list.includes(id)){
            filter_list.push(id);
        }
    }else{
        filter_list =  filter_list.filter(function(value){ 
            return value != id;
        });
    }
    if(filter_list != []){
        render_items(current);
        $('.more').removeClass('d-none');
    }
    if($('#data_items').children().length == 0){// process intro show when  data_items empty
        $('#intro').removeClass('d-none');
        $('.more').addClass('d-none');
    }
}
function ChangePrice(data, price_data){
    if(price != ""){
        $('#'+ price).removeClass('active_select');
    }
    price = price_data;
    $('#'+price).addClass('active_select');
    render_items(current);
}
function showMore(){
    current += 8;
    render_items(current);
    // console.log(lenght_products);
    // console.log(current);
    // console.log(Number(lenght_products - current));
    $('.more').text(`Xem thêm, sản phẩm còn lại ${Number(lenght_products - current)}`);
}
function SetPrice(){
   let min = document.getElementById('low-price').value;
   let max = document.getElementById('high-price').value;
   new_price = min +'-'+max;
   ChangePrice(null, new_price);
}

