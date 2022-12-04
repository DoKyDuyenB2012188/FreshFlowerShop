window.onload = () => {
  showCart();
  totalPrice();
};
function changePrice(price) {
  ////2.000.000 
  let result = "";
  let tem = price.split(" ")[0];
  tem = tem.split(".");
  for (let i = 0; i < tem.length; i++) {
    result += tem[i];
  }
  return Number(result);
}
function showCart() {
  let sp = window.localStorage.getItem("cart");
  console.log(sp);
  if (sp) {
    sp = JSON.parse(sp);
    const product = new Product();
    let cart = [];
    sp.forEach((p) => {
      cart.push(product.findById(p.id));
    });
    //2.000.000 đ
    let result = "";
    for (let i = 0; i < cart.length; i++) {
      let component = `
    <tr id="${cart[i].id}">
    <td id="stt${i + 1}">${i + 1}</td>
    <td>
        <img src="${
          "https://hoayeuthuong.com/" + cart[i].imageURL
        }" class="hinhdaidien">
    </td>
    <td id="product-name${i + 1}">${cart[i].nameCard}</td>
    <td id="so-luong${i + 1}" class=" text-right">
        <div>
            <button onclick="plus('${
              cart[i].id
            }');" style="border: none;"><i class="fas fa-plus"></i></button>
            <p id="num_${cart[i].id}" style="display: inline; margin: 0px 10px;">${sp[i].num}</p>
            <button onclick="sub('${
              cart[i].id
            }')" style="border: none;"><i class="fas fa-minus"></i></button>
        </div>
    </td>
    <td id="gia-tien${i + 1}" class=" text-right">${cart[i].newprice}</td>
    <td id="thanh-tien${i+1}" class="thanhtien text-right">${
      changePrice(cart[i].newprice) * Number(sp[i].num)
    }</td>
    <td>
        <a onclick="deleteCart('${
          cart[i].id
        }')" data-sp-ma="2" class="btn btn-danger btn-delete-sanpham">
            <i class="fa fa-trash" aria-hidden="true"></i> Xóa <ion-icon class="trash-outline" name="trash-outline"></ion-icon>
        </a>
    </td>
</tr>    
    `;
    result += component;
    }
    document.getElementById('datarow').innerHTML = "";
    document.getElementById('datarow').innerHTML = result;
  }
}

function plus(id){
    let cart = window.localStorage.getItem('cart');
    let check = 0;
    cart = JSON.parse(cart);
    cart.forEach((el)=>{
        if(el.id == id){
            el.num = Number(el.num) + 1;
            check = el.num;
        }
    })
    window.localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById(`num_${id}`).textContent = check;
    updateCart();
}

function deleteCart(id){
    let cart = window.localStorage.getItem('cart');
    if(cart){
     cart = JSON.parse(cart);
     cart = cart.filter((el)=> el.id != id);
     window.localStorage.setItem('cart', JSON.stringify(cart));
     showCart();
     totalPrice();
     updateCart();
    }
 }

function sub(id){
    let check = 0;
    let cart = window.localStorage.getItem('cart');
    cart = JSON.parse(cart);
    cart.forEach((el)=>{
        if(el.id == id){
            el.num = Number(el.num) - 1;
            check = el.num;
        }
    })
    if(check == 0){
       return deleteCart(id);
    }
    window.localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById(`num_${id}`).textContent = check;
    updateCart();
}
function totalPrice(){
    const price = document.getElementsByClassName('thanhtien');
    let total = 0;
    for(let i=0; i< price.length;i++){
        total += Number((price[i].textContent).trim());
    }
    document.getElementById('total').innerText = total;
}

function Thanh_Toan(){
    let sp = window.localStorage.getItem('cart');
    if(sp){
        alert('Xác nhận đơn hàng '+ sp);
        window.localStorage.removeItem('cart');
    }
}