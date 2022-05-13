export const formattedCurrency = (price) => {
    if (isNaN(price)) {
        const priceStr = price.replace(/\,/g, '');
        price = priceStr * 1;
    }
    return "#" + (price + "").replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,").replace('.', ',');
}