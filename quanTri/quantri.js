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
            
            <a onclick="delete_3()" data-sp-ma="4" class="btn btn-danger btn-delete-sanpham">
                <i class="fa fa-trash" aria-hidden="true"></i> sửa <ion-icon class="trash-outline" name="trash-outline"></ion-icon>
            </a>
        </td>
        <td>
            
            <a onclick="delete_3()" data-sp-ma="4" class="btn btn-danger btn-delete-sanpham">
                <i class="fa fa-trash" aria-hidden="true"></i> Xóa <ion-icon class="trash-outline" name="trash-outline"></ion-icon>
            </a>
        </td>
    </tr>`
    }
    document.getElementById('mount').textContent = all.length;
    document.getElementById('datarow').innerHTML = "";
    document.getElementById('datarow').innerHTML = proAll;
}