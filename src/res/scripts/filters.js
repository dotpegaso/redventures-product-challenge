export function formatter(value){
    const numberFormat =  new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    });

    return numberFormat.format(value);
}