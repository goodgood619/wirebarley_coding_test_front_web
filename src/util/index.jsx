export const MakeExchangeFormValue = (value) => {
    return value.toFixed(2).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

export const MakeUpperCase = (value) => {
    return value.toUpperCase();
}