function addProduct(){
    let frm = document.forms['new_product'];
    let name = frm.name_sp.value;
    let id = frm.id.value;
    let price = frm.price_sp.value;
    let price_old = frm.price_old.value;
    let image_sp = frm.image_sp.value;
    let object = frm.object.value;
    let type = frm.type.value;
    let color = frm.color.value;
    let detail = frm.detail.value;
    let des = frm.des.value;
    let new_sp = frm.new.checked;
    let sale = frm.sale.checked;
    let occasion = frm.occasion.value;
    object = object.split(', ');
    type = type.split(', ');
    color = color.split(', ');
    detail = detail.split(', ');
    occasion = occasion.split(', ');
    let obj = 	{
		"id": id,
		"nameCard": name,
		"imageURL": image_sp,
		"newprice": price,
		"oldprice": price_old,
		"newitem": new_sp,
		"isale": sale,
		"occasion": occasion,
		"object": object,
		"style": type,
		"color": color,
		"detail": {
			"name_title": name,
			"old_price": price_old,
			"price": price,
			"descriptions": detail,
			"intro": des
		}
	}
    product_List.push(obj);
    localStorage.setItem('products',JSON.stringify(product_List));
    console.log('Danh sách sản phẩm là: ');
    console.log(product_List);
    show();
}