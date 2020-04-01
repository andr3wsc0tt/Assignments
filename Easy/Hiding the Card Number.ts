function cardHide(card : string) : string {
    let newCard : string = "";
    for (let i = 0; i < card.length-4; i++)
    {
        newCard+='*';
    }
    newCard += card.slice(card.length-4, card.length);

    return newCard;
}
