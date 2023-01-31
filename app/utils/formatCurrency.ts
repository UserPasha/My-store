export const formatCurrency = (price: number) =>
    new Intl.NumberFormat(undefined, {
                style: 'currency', currency: 'USD'
            }).format(price)

