window.onload = () => {
    show_item();
}
let storeId = "";
function show_item(){
    let id = window.localStorage['show'];
    storeId = id;
    let products = new Product();
    products.findOne(id).then((item) =>{
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
    });
}

function toCart(){
   let cart = window.localStorage.getItem('cart');
   if(cart){
    cart = JSON.parse(cart);
    let result = cart.filter(element => element.id == storeId);
    if(result.length == 0){
        console.log(cart);
        cart.push({"id": storeId, "num": 1})
    }else{
        alert("Sản phẩm đã có trong giỏ hàng")
    }
    window.localStorage.setItem('cart',JSON.stringify(cart));
    document.getElementById('num').textContent = '('+cart.length+')';
   }else{
    window.localStorage.setItem('cart',JSON.stringify([{"id": storeId, "num": 1}]));
    document.getElementById('num').textContent = '('+cart.length+')';
   }
}

function buyToCart(){
    toCart();
    window.location.href = '../gioHang/gioHang.html';
}