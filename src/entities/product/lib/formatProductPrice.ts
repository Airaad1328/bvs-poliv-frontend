const priceFormatter = new Intl.NumberFormat('uk-UA');

export function formatProductPrice(price: number) {
    return `${priceFormatter.format(price)} грн`;
}