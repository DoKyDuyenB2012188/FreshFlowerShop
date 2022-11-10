class Card {
  constructor(id, image, card_name, new_price, old_price, newItem, isale) {
    this.id = id;
    this.card_name = card_name;
    this.image = image;
    this.new_price = new_price;
    this.old_price = old_price;
    this.newItem = newItem;
    this.isale = isale;
  }
  show_name(){
    return this.card_name;
  }
  render() {
    return `<div class="item">
                <div class="i">
                    <a title="${this.card_name}" href="${'./chitietsanpham.html/'+this.id}">
                        <img class="lazy" alt="${this.card_name}" title="${this.card_name}" src="${'https://hoayeuthuong.com/'+this.image}" style="display: inline;">
                    </a>
                </div>
                <div class="t">
                    <a title="${this.card_name}" href="${'./chitietsanpham.html/'+this.id}">${this.card_name}</a>
                    <span class="vn">
                        ${this.old_price != '' ? `<em class="oprice">${this.old_price}</em>`: null}
                        <em>${this.new_price}</em>
                    </span>
                </div>
                ${this.newItem ? '<span class="ibadge inew"></span>' : null}
                ${this.isale ? '<span class="ibadge isale">Sale</span>' : null}
            </div>`;
  }
}
