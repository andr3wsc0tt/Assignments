function cardHide(card) {
    var newCard = "";
    for (var i = 0; i < card.length - 4; i++) {
        newCard += '*';
    }
    newCard += card.slice(card.length - 4, card.length);
    return newCard;
}
console.log(cardHide("1785678"));
//# sourceMappingURL=main.js.map