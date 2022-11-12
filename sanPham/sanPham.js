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
function render_items(index){
    const product = new Product();
    const cardList = product.filterProduct(filter_list);
    console.log(cardList);
    let length = cardList.length > index ? index : cardList.length;
    if(cardList != []){
        document.getElementById('data_items').innerHTML = '';
        let dom = '';
        for(let i=0; i< length; i++){
            dom +=`<div class="item col-6 col-sm-3 card">
                        <div class="i">
                            <a title="${cardList[i].nameCard}" href="${'./chitietsanpham.html/'+cardList[i].id}">
                                <img class="lazy card-img-top pt-2" alt="${cardList[i].nameCard}" title="${cardList[i].nameCard}" src="${'https://hoayeuthuong.com/'+cardList[i].imageURL}" style="display: inline;">
                            </a>
                        </div>
                        <div class="t pb-2">
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
function ChangeState(data, id){
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
        render_items(32);
    }
}
function ChangePrice(data, price_data){
    price = price_data;
    render_items();
}

