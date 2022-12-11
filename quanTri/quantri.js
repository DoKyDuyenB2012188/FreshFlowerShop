if (window.localStorage.getItem("products") == undefined) {
  window.localStorage.setItem("products", JSON.stringify(products));
}
var product_List = JSON.parse(localStorage.getItem("products"));
window.onload = () => {
  show();
};
function show() {
  let all = JSON.parse(localStorage.getItem("products"));
  console.log(all);
  let proAll = "";
  let imageURL = "";
  for (let i = 0; i < all.length; i++) {
    let img = all[i].imageURL.split("/");
    if (img.includes("hinh-hoa-tuoi")) {
      imageURL = "https://hoayeuthuong.com/" + all[i].imageURL;
    } else {
      imageURL = all[i].imageURL;
    }
    proAll += `
        <tr id="${all[i].id}">
        <td>
            <img src='${imageURL}'>
        </td>
        <td id="name_${all[i].id}">${all[i].nameCard}</td>
        <td>
            
            <p>${all[i].id}</p>
        </td>
        <td>
            
            <a onclick="goto_delete('${all[i].id}')" data-sp-ma="4" class="btn btn-danger btn-delete-sanpham">
                <i class="fa fa-trash" aria-hidden="true"></i> Xóa <ion-icon class="trash-outline" name="trash-outline"></ion-icon>
            </a>
        </td>
    </tr>`;
  }
  document.getElementById("mount").textContent = JSON.parse(
    localStorage.getItem("products")
  ).length;
  document.getElementById("datarow").innerHTML = "";
  document.getElementById("datarow").innerHTML = proAll;
}

function handleClick() {
  window.location.href = "./update.html";
}

function goto_updated(id) {
  window.location.href = `./update.html?update=${id}`;
}

function goto_delete(id) {
    console.log(id);
  let all = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
    console.log(all);
  if (confirm("Bạn có chắc chắn muốn xóa " + id + " này không !...")) {
    if(all.length == 1){
        all= [];
    }else{
        all.splice(id, 1);
    }
  }
  localStorage.setItem("products", JSON.stringify(all));
  show();
}
