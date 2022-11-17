window.onload = () => {
    show_item();
}
function show_item(){
    let id = window.localStorage['show'];
    let products = new Product();
    let item = products.findOne(id)[0];
    $('#title_item').text(item.detail.name_title)
    $('#image_item').attr('src','https://hoayeuthuong.com/hinh-hoa-tuoi/hoa-khuyen-mai/' + item.imageURL);
    $('#oldprice > s').text(item.detail.old_price);
    $('#newprice > b').text(item.detail.price);
    $('#intro').text(item.detail.intro);
    if(item.detail.descriptions.length > 0){
        $('#des').append('<li><b>Sản phẩm bao gồm:</b></li>');
        for(let i = 0; i< item.detail.descriptions.length;i++){
            $('#des').append(`<li>- ${item.detail.descriptions[i]}</li>`);
        }
    }
}