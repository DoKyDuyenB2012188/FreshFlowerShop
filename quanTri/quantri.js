window.onload = () => {
    show();
}

function show(){

    const product = new Product();
    let all = product.getAll();
    console.log(all);
    let proAll = "";
    for(let i=0; i< all.length; i++){
        proAll += `
        <tr id="${all[i].id}">
        <td>
            <img src='${"https://hoayeuthuong.com/"+all[i].imageURL}'>
        </td>
        <td id="name_${all[i].id}">${all[i].nameCard}</td>
        <td>
            
            <p>${all[i].id}</p>
        </td>
        <td>
            
            <a onclick="goto_updated('${all[i].id}')" data-sp-ma="4" class="btn btn-danger btn-delete-sanpham">
                <i class="fa fa-trash" aria-hidden="true"></i> sửa <ion-icon class="trash-outline" name="trash-outline"></ion-icon>
            </a>
        </td>
        <td>
            
            <a onclick="goto_delete('${all[i].id}')" data-sp-ma="4" class="btn btn-danger btn-delete-sanpham">
                <i class="fa fa-trash" aria-hidden="true"></i> Xóa <ion-icon class="trash-outline" name="trash-outline"></ion-icon>
            </a>
        </td>
    </tr>`
    }
    document.getElementById('mount').textContent = all.length;
    document.getElementById('datarow').innerHTML = "";
    document.getElementById('datarow').innerHTML = proAll;
}

function goto_updated(id){
    window.location.href = `./update.html?update=${id}`
}
function goto_delete(id){
    alert('do');
    let allProduct = new Product();
    allProduct.deleteProduct(id);
    allProduct.save(allProduct);
    window.location.reload();
}